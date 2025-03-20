"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { auth, db } from "../../../firebaseConfig"; // Ajusta la ruta según corresponda
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const WhatsAppContactBox = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "",
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

    // Validar campos requeridos
    if (!formData.name || !formData.phone || !formData.timeSlot) {
      showAlert("Por favor, diligencia todos los campos requeridos.", "error");
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

    // Verificar si ya existe un envío para este UID en la colección "whatsappContacts"
    const docRef = doc(db, "whatsappContacts", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      showAlert("Ya has enviado tu información desde este dispositivo.", "warning");
      return;
    }

    // Guardar la información del formulario en Firestore
    try {
      await setDoc(docRef, {
        ...formData,
        uid,
        timestamp: new Date(),
      });
      showAlert("Información enviada exitosamente.", "success");
      setSubmitted(true);
      // Redirigir al home después de 2 segundos (opcional)
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar la información:", error);
      showAlert("Error al enviar la información. Inténtalo de nuevo.", "error");
    }
  };

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      {/* Notificación personalizada centrada */}
      {alert.message && (
        <div
          className={`fixed top-1/2 left-1/2 z-50 p-4 rounded shadow-lg transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
            alert.type === "success"
              ? "bg-green-500 text-white"
              : alert.type === "warning"
              ? "bg-yellow-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {alert.message}
        </div>
      )}
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Te escribimos por WhatsApp
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Indícanos tu nombre, número de WhatsApp y selecciona tu franja horaria. Nuestros asesores se comunicarán contigo a la brevedad.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Ingresa tu número de WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          >
            <option value="">Selecciona tu franja horaria</option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
          <input
            type="submit"
            value="Enviar"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            disabled={submitted}
          />
        </div>
        <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Nuestros asesores se comunicarán contigo a la brevedad.
        </p>
      </form>

      {/* Los SVGs decorativos se mantienen igual */}
      <div>
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
              fill="url(#paint0_linear_1028_601)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_601"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-2 top-[140px]">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#paint0_linear_1028_602)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_602"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default WhatsAppContactBox;
