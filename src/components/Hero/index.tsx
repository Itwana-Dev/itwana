"use client";

import Link from "next/link";
import HeroBackgroundTop from "./HeroBackgroundTop";
import HeroBackgroundBottom from "./HeroBackgroundBottom";
import CTAButton from "../Common/CTAButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Itwana Soluciones Tecnológicas
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Desarrollamos plataformas digitales innovadoras y eficientes, adaptadas a las
                necesidades específicas de tu negocio. Desde pequeñas empresas hasta grandes
                corporaciones, brindamos tecnología que impulsa tu crecimiento y optimiza tus
                procesos.
              </p>

              {/* Botón de CTA centrado que abre WhatsApp en una nueva pestaña */}
              <div className="mt-8">
                <CTAButton onClick={() => window.open("https://wa.link/4zj2ia", "_blank")}>
                  Solicitar cotización
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo superior estático */}
      <HeroBackgroundTop />

      {/* Fondo inferior estático */}
      <HeroBackgroundBottom />
    </section>
  );
};

export default Hero;
