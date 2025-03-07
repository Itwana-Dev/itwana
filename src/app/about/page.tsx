import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itwana Soluciones",
  description: "Desarrollo de software",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quienes somos"
        description="En Itwana, somos un equipo de profesionales comprometidos con la innovación y el desarrollo tecnológico. Nuestra misión es acercar la tecnología a emprendedores, empresarios y visionarios, brindándoles soluciones de vanguardia para convertir sus ideas en realidades escalables y de alto impacto."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
