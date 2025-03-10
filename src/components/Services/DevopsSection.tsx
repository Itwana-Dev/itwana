"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";
import ModalVideo from "react-modal-video";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DevopsSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="devops" className="pt-24 md:pt-32 lg:pt-40 relative">
      {/* Elementos decorativos de Radial Gradient */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,108,247,0.2) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,108,247,0.15) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Columna de Texto */}
            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SectionTitle
                title="Infraestructura & DevOps"
                paragraph="Optimizamos y automatizamos tus procesos de infraestructura para asegurar el rendimiento."
                mb="44px"
              />
              <div className="mb-12 max-w-[570px]">
                <List text="Automatización de procesos críticos." />
                <List text="Monitorización en tiempo real." />
                <List text="Optimización y escalabilidad garantizadas." />
              </div>
            </motion.div>
            {/* Columna de Imagen con botón de video */}
            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                <Image
                  src="/images/services/devops.png"
                  alt="Infraestructura & DevOps"
                  fill
                  className="mx-auto max-w-full drop-shadow-three"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="D2udYgTX2YU&t"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
