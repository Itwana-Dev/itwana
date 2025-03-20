"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useContactForm } from "../../hooks/useContactForm"; // Ajusta la ruta según corresponda

const Contact = () => {
  const { formData, submitted, alert, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
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
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Necesitas ayuda? ¡Contáctanos ahora y recibe un estudio gratuito para tu negocio!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nuestro equipo en Itwana Soluciones Tecnológicas te responderá lo antes posible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Correo
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre de Empresa O Emprendimiento
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Ingresa el nombre de tu empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Número de Contacto
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ingresa tu número de contacto"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Aquí puedes escribir tu mensaje. Queremos conectarte a ti y a tu negocio"
                        value={formData.message}
                        onChange={handleChange}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      disabled={submitted}
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
