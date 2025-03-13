"use client";

import { motion } from "framer-motion";
// Importamos cada sección por separado
import IdeaSection from "./IdeaSection";
import PlanificacionSection from "./PlanificacionSection";
import LanzamientoSection from "./LanzamientoSection";

// Mantenemos la misma estructura de variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Emprendedores() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <IdeaSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <PlanificacionSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={sectionVariants}
      >
        <LanzamientoSection />
      </motion.div>
    </>
  );
}
