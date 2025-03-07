import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container">
        
        {/* Título centrado arriba */}
        <div className="w-full px-4 text-center mb-12 lg:mb-16">
          <SectionTitle
            title="Nuestra Metodología de Trabajo"
            paragraph="Nos enfocamos en comprender a fondo las necesidades de cada cliente, analizando cada detalle para diseñar soluciones digitales a medida. A través de un proceso colaborativo e innovador, transformamos ideas en herramientas tecnológicas eficientes, escalables y alineadas con los objetivos de cada negocio."
          />
        </div>

        <div className="flex flex-wrap items-center -mx-4">
          
          {/* Contenedor de la imagen */}
          <div className="w-full px-4 lg:w-1/2 flex justify-center">
            <div
              className="relative w-full max-w-[500px] aspect-[25/24]"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="Sobre nosotros"
                fill
                className="drop-shadow-three dark:hidden"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Sobre nosotros"
                fill
                className="hidden drop-shadow-three dark:block"
              />
            </div>
          </div>

          {/* Contenedor de la metodología */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[520px]">
              <h3 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Nuestra Metodología Paso a Paso
              </h3>

              {/* Lista de pasos */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    1. Análisis y comprensión del cliente
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Nos sumergimos en la visión del cliente, entendiendo sus necesidades, objetivos y desafíos 
                    para diseñar una estrategia tecnológica alineada con su negocio.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    2. Planificación y estrategia
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Diseñamos una hoja de ruta detallada, definiendo las mejores tecnologías, arquitectura y 
                    funcionalidades que garanticen una solución efectiva y escalable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    3. Diseño centrado en el usuario
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Creamos experiencias intuitivas y atractivas, priorizando la usabilidad, accesibilidad y 
                    rendimiento para maximizar la eficiencia de cada solución.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    4. Desarrollo y pruebas
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Implementamos el desarrollo con las mejores prácticas de codificación, realizando pruebas 
                    continuas para asegurar la calidad y seguridad del software.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    5. Implementación y lanzamiento
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Desplegamos la solución en el entorno productivo, garantizando una transición sin problemas 
                    y capacitando al cliente para su uso óptimo.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    6. Mantenimiento y optimización continua
                  </h4>
                  <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Brindamos soporte técnico y mejoras continuas, asegurando que la solución evolucione con 
                    las necesidades del cliente y el mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
