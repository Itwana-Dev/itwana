"use client";

import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Nuestros Planes"
          paragraph="Elige el plan que mejor se adapte a tus necesidades y haz crecer tu presencia digital."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Plan "Emprende" – (Basado en Páginas Web Positrón) */}
          <PricingBox
            packageName="Plan Basico"
            price="600.000 COP"
            duration="" 
            subtitle="Solucion Inicial ideal para emprendedores que dan sus primeros pasos y buscan una presencia profesional sin complicaciones."
          >
            <OfferList
              text="Hosting + Dominio"
              status="active"
            />
            <OfferList
              text="Páginas y secciones firmes más el Home"
              status="active"
            />
            <OfferList
              text="Integración con redes sociales"
              status="active"
            />
            <OfferList
              text="Formulario de contacto"
              status="active"
            />
            <OfferList
              text="Google My Business"
              status="active"
            />
            <OfferList
              text="Certificado SSL"
              status="active"
            />
            <OfferList
              text="Backup y seguridad"
              status="active"
            />
            <OfferList
              text="Panel administrable"
              status="active"
            />
            <OfferList
              text="Correos corporativos"
              status="active"
            />
          </PricingBox>

          {/* Plan "Impulsa" – (Basado en Páginas Web Neutrón) */}
          <PricingBox
            packageName="Plan Medio"
            price="800.000 COP"
            duration=""
            subtitle="Solucion de crecimiento ideal para negocios en expansión que requieren mayor capacidad y funcionalidades adicionales."
          >
            <OfferList
              text="Hosting + Dominio"
              status="active"
            />
            <OfferList
              text="Hasta 8 páginas firmes más el Home"
              status="active"
            />
            <OfferList
              text="Integración con redes sociales"
              status="active"
            />
            <OfferList
              text="Formularios de contacto"
              status="active"
            />
            <OfferList
              text="Google My Business"
              status="active"
            />
            <OfferList
              text="Certificado SSL"
              status="active"
            />
            <OfferList
              text="Backup y seguridad"
              status="active"
            />
            <OfferList
              text="Panel administrable"
              status="active"
            />
            <OfferList
              text="Correos corporativos"
              status="active"
            />
            <OfferList
              text="Chat online"
              status="active"
            />
            <OfferList
              text="Google Analytics"
              status="active"
            />
            <OfferList
              text="Tienda ecommerce"
              status="active"
            />
            <OfferList
              text="Pasarela de pagos"
              status="active"
            />
          </PricingBox>

          {/* Plan "Lidera" – (Basado en Páginas Web Átomo) */}
          <PricingBox
            packageName="Plan Completo"
            price="1'500.000 COP"
            duration=""
            subtitle="Solucion Premium ideal para quienes exigen el máximo rendimiento, seguridad y personalización para su sitio web."
          >
            <OfferList
              text="Hosting + Dominio"
              status="active"
            />
            <OfferList
              text="Hasta 10 páginas firmes más el Home"
              status="active"
            />
            <OfferList
              text="Integración con redes sociales"
              status="active"
            />
            <OfferList
              text="Formularios de contacto"
              status="active"
            />
            <OfferList
              text="Google My Business"
              status="active"
            />
            <OfferList
              text="Certificado SSL"
              status="active"
            />
            <OfferList
              text="Backup y seguridad"
              status="active"
            />
            <OfferList
              text="Panel administrable"
              status="active"
            />
            <OfferList
              text="Correos corporativos"
              status="active"
            />
            <OfferList
              text="Chat online"
              status="active"
            />
            <OfferList
              text="Google Analytics"
              status="active"
            />
            <OfferList
              text="Tienda ecommerce"
              status="active"
            />
            <OfferList
              text="Pasarela de pagos"
              status="active"
            />
            <OfferList
              text="Automatizaciones"
              status="active"
            />
            <OfferList
              text="Suscripciones"
              status="active"
            />
            <OfferList
              text="Integración de marketing"
              status="active"
            />
            <OfferList
              text="Web app"
              status="active"
            />
            <OfferList
              text="Realidad aumentada"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      {/* Decoración SVG (opcional) */}
      <div className="hidden md:block absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
