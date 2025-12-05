import Image from "next/image";

const HeroBarranca = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[150px] md:pb-[140px] md:pt-[180px] xl:pb-[180px] xl:pt-[220px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Texto Hero */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
                Barranca Go!: Tu ciudad en la palma de tu mano.
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-gray-300">
                La plataforma integral que conecta a los ciudadanos de Barrancabermeja con servicios, oportunidades, entretenimiento y soluciones centralizadas.
              </p>
              <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                {/* Botón Principal con tu Naranja */}
                <button className="rounded-full bg-[#f96909] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#d85a06] shadow-lg hover:shadow-[#f96909]/40">
                  Descargar App
                </button>
                
                {/* Botón Secundario para ir a la otra Landing */}
                <button 
                  onClick={() => window.open("https://TU-OTRA-LANDING-PAGE.com", "_blank")}
                  className="rounded-full border border-[#f96909] px-8 py-4 text-base font-semibold text-[#f96909] duration-300 ease-in-out hover:bg-[#f96909] hover:text-white dark:text-white dark:hover:bg-[#f96909]"
                >
                  Visitar Sitio Oficial
                </button>
              </div>
            </div>
          </div>
          
          {/* Imagen Hero */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/phone-mockup.png"
                alt="Barranca Go App"
                fill
                className="mx-auto max-w-full drop-shadow-2xl lg:mr-0 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBarranca;