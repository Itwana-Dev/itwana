"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../firebaseConfig"; // Ajusta la ruta según corresponda
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [userUID, setUserUID] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  // Función para mostrar notificaciones personalizadas (centradas)
  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setAlert({ message: "", type: "" }), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: todos los campos son obligatorios
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.phone ||
      !formData.message
    ) {
      showAlert("Por favor, diligencia todos los campos.", "error");
      return;
    }

    // Si el usuario no está autenticado, autenticarlo de forma anónima
    let uid = userUID;
    if (!uid) {
      try {
        const userCredential = await signInAnonymously(auth);
        uid = userCredential.user.uid;
        setUserUID(uid);
      } catch (error) {
        console.error("Error al iniciar sesión anónima:", error);
        showAlert("Error al iniciar sesión anónima", "error");
        return;
      }
    }

    // Verificar si ya existe un envío para este UID en la colección "contacts"
    const docRef = doc(db, "contacts", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      showAlert("Ya has enviado un mensaje desde este dispositivo.", "warning");
      return;
    }

    // Guardar la información del formulario en Firestore
    try {
      await setDoc(docRef, {
        ...formData,
        uid,
        timestamp: new Date(),
      });
      showAlert("Mensaje enviado exitosamente.", "success");
      setSubmitted(true);
      // Redirigir al home después de 2 segundos
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      showAlert("Error al enviar el mensaje. Inténtalo de nuevo.", "error");
    }
  };

  return { formData, submitted, alert, handleChange, handleSubmit };
};
