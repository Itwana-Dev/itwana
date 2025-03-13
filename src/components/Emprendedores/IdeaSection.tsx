"use client";

import Image from "next/image";
import CTAButton from "@/components/Common/CTAButton";

export default function IdeaSection() {
  return (
    <section id="idea" className="pt-36 md:pt-40 lg:pt-48 pb-16">
      <div className="container">
        <div className="flex flex-wrap items-start -mx-4">
          {/* Columna Izquierda: Ilustración */}
          <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
            <div className="mx-auto max-w-sm">
              <Image
                src="/images/emprendedor/emprendedor.png" 
                alt="Ilustración para emprendedores"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Columna Derecha: Subtítulo, Título, Párrafo, Bullets y Botón */}
          <div className="w-full px-4 lg:w-1/2">
            {/* Subtítulo */}
            <span className="mb-2 inline-block text-base font-semibold">
              Haz Crecer Tu Emprendimiento
            </span>

            {/* Título principal */}
            <h2 className="text-3xl font-bold mb-4 text-primary">Vende por internet</h2>

            {/* Párrafo principal optimizado */}
            <p className="text-lg mb-8">
              ¿Tienes un emprendimiento o quieres iniciar uno? En <span className="text-primary">ITWANA</span> impulsamos tu negocio con soluciones web innovadoras y marketing digital para aumentar tus ventas online de forma rápida y profesional.
            </p>

            {/* Sección de Bullets en dos columnas */}
            <div className="flex flex-wrap -mx-4">
              {/* Bullet 1 */}
              <div className="w-full md:w-1/2 px-4 mb-6">
                <div className="flex items-start">
                  {/* Ícono */}
                  <div className="mr-3">
                    <BulletIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Aumenta tus ventas y haz crecer tu emprendimiento
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Estrategias digitales que convierten visitas en clientes, potenciando tu presencia online.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="w-full md:w-1/2 px-4 mb-6">
                <div className="flex items-start">
                  {/* Ícono */}
                  <div className="mr-3">
                    <BulletIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Múltiples planes para ajustarse a tu necesidad
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Elige entre nuestros planes flexibles, diseñados para adaptarse a tus objetivos y maximizar tus resultados digitales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           {/* Botón de CTA centrado que abre WhatsApp en una nueva pestaña */}
                         <div className="mt-8">
                           <CTAButton onClick={() => window.open("https://wa.link/4zj2ia", "_blank")}>
                             Solicitar cotización
                           </CTAButton>
                         </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* Ícono de ejemplo para cada bullet */
function BulletIcon() {
  return (
    <svg
      width="24"
      height="24"
      className="fill-current text-primary"
      viewBox="0 0 24 24"
    >
      <path d="M19,11H13V5c0-0.55-0.45-1-1-1S11,4.45,11,5v6H5c-0.55,0-1,0.45-1,1s0.45,1,1,1h6v6c0,0.55,0.45,1,1,1s1-0.45,1-1v-6h6
               c0.55,0,1-0.45,1-1S19.55,11,19,11z"/>
    </svg>
  );
}

