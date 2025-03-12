"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { glowTitle } from "./heroVariants";
import HeroBackgroundTop from "./HeroBackgroundTop";
import HeroBackgroundBottom from "./HeroBackgroundBottom";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* Animación de entrada del contenedor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-[800px] text-center"
              >
                {/* Título con un sutil efecto de “brillo” */}
                <motion.h1
                  variants={glowTitle}
                  initial="initial"
                  animate="animate"
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  Itwana Soluciones Tecnológicas
                </motion.h1>

                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Desarrollamos plataformas digitales innovadoras y eficientes, adaptadas a las
                  necesidades específicas de tu negocio. Desde pequeñas empresas hasta grandes
                  corporaciones, brindamos tecnología que impulsa tu crecimiento y optimiza tus
                  procesos.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SVG de fondo superior con oscilación */}
        <HeroBackgroundTop />

        {/* SVG de fondo inferior con animación de "dibujo" en sus líneas */}
        <HeroBackgroundBottom />
      </section>
    </>
  );
};

export default Hero;
