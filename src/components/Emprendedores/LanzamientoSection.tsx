"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Lista de preguntas y respuestas
const faqs = [
  {
    question: "¿Qué es el hosting y por qué lo necesito?",
    answer:
      "El hosting es el servicio que permite alojar tu sitio web en un servidor para que sea accesible en Internet. Es esencial para que tus clientes puedan ver tu página en cualquier momento y desde cualquier lugar.",
  },
  {
    question: "¿Qué pasa con el dominio después del primer año gratuito?",
    answer:
      "Una vez cumplido el primer año, el costo de renovación del dominio depende de la extensión (.com, .net, etc.). Por lo general, ronda entre los 10 y 15 USD al año, aunque puede variar según el proveedor.",
  },
  {
    question: "¿Puedo cambiar de plan si mi negocio crece?",
    answer:
      "¡Por supuesto! Si tu emprendimiento se expande y necesitas más recursos o funcionalidades, puedes pasar a un plan superior en cualquier momento. Nos encargaremos de que la migración sea sencilla y sin interrupciones.",
  },
  {
    question: "¿Cómo se realiza el pago y qué métodos aceptan?",
    answer:
      "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, transferencias bancarias y plataformas como PayPal,Pse,etc. El pago se procesa de forma segura y, una vez aprobado, comenzamos la configuración de tu sitio.",
  },
  {
    question: "¿El soporte técnico está incluido en los planes?",
    answer:
      "Sí, todos nuestros planes incluyen soporte técnico para ayudarte con dudas o incidencias sobre tu sitio web, hosting o dominio. El nivel de soporte varía según el plan, pero siempre tendrás asistencia garantizada.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="lanzamiento"
      className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors"
            >
              {/* Encabezado de la pregunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <span className="text-left text-gray-800 dark:text-gray-100 font-medium">
                  {item.question}
                </span>
                {/* Ícono con animación de rotación */}
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 dark:text-gray-100 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Respuesta con animación de altura */}
              <div
                className={`px-6 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-200">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
