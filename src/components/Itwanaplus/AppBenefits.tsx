import { CheckCircleIcon } from "@heroicons/react/24/solid";

const benefits = [
  {
    title: "Todo en Uno",
    desc: "Integra más de 15 módulos esenciales en una sola herramienta.",
  },
  {
    title: "Información Verificada",
    desc: "Datos de contacto, horarios y ubicaciones centralizadas y confiables.",
  },
  {
    title: "Acceso Rápido",
    desc: "Guarda tus módulos más usados en 'Favoritos'.",
  },
  {
    title: "Funciona Offline",
    desc: "Consulta directorios y guías incluso sin conexión a internet.",
  },
];

const AppBenefits = () => {
  return (
    <section className="py-24 bg-[#f96909]/5 dark:bg-[#f96909]/10">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Beneficios para el Usuario
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <CheckCircleIcon className="h-16 w-16 text-[#f96909] mb-6" />
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-body-color dark:text-gray-300 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppBenefits;