"use client";

import Image from "next/image";

export default function ItwanaInfo() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Columna de texto (Izquierda) */}
          <div className="w-full px-4 md:w-1/2 space-y-4">
            {/* Pequeño efecto de escalado al pasar el cursor */}
            <span className="mb-2 inline-block text-base font-semibold text-primary transition-transform duration-300 hover:scale-105">
              Itwana+
            </span>

            {/* Título con gradiente en el texto y efecto hover */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
              La app que lo tiene todo
              <span className="text-primary"> en Barrancabermeja</span>
            </h1>

            {/* Párrafo con leve efecto hover */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[500px] transition-transform duration-300 hover:scale-105">
              Itwana Plus es una app donde podrás encontrar todos los sitios
              comerciales, turísticos y de servicios en Barrancabermeja, Santander.
              Disponible próximamente para iOS y Android.
            </p>
          </div>

          {/* Columna de la card (Derecha) */}
          <div className="w-full px-4 md:w-1/2">
            <div className="flex items-center justify-end">
              {/* Card con efecto de elevación y desplazamiento al hover */}
              <div className="relative w-full h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-lg -mt-16 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <Image
                  src="/images/phone-mockup.png"
                  alt="Phone Mockup"
                  fill
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
