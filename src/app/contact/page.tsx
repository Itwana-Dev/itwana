import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itwana Soluciones",
  description: "Soluciones Tecnologicas",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactanos"
        description="¿Listo para llevar tu negocio al siguiente nivel con soluciones tecnológicas a la medida? ¡Contáctanos y descubre cómo podemos impulsar tu crecimiento juntos!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
