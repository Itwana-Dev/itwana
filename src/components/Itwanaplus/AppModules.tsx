import { 
  BuildingOfficeIcon, 
  TruckIcon, 
  MusicalNoteIcon, 
  BriefcaseIcon, 
  HeartIcon 
} from "@heroicons/react/24/outline";

const modules = [
  {
    category: "Gestión y Participación Ciudadana",
    icon: <BuildingOfficeIcon className="h-8 w-8" />,
    items: [
      { title: "Reporte Ciudadano", desc: "Reporta fallas de alumbrado, acueducto o vías con una foto." },
      { title: "Emergencias y Seguridad", desc: "Acceso inmediato a Policía, Bomberos, Ambulancias." },
      { title: "Pagos y Trámites", desc: "Acceso a portales oficiales de servicios públicos e impuestos." },
    ],
  },
  {
    category: "Movilidad Urbana",
    icon: <TruckIcon className="h-8 w-8" />,
    items: [
      { title: "Rutas de Buses", desc: "Consulta rutas, paradas y planifica tu viaje." },
      { title: "Estado de la Vía", desc: "Reportes activos sobre cierres viales y tráfico." },
      { title: "Pedir Transporte", desc: "Directorio de taxis y conductores elegidos verificados." },
    ],
  },
  {
    category: "Vida, Ocio y Cultura",
    icon: <MusicalNoteIcon className="h-8 w-8" />,
    items: [
      { title: "Agenda de Eventos", desc: "Conciertos, festivales y talleres en la ciudad." },
      { title: "Turismo y Patrimonio", desc: "Rutas turísticas y guías informativas." },
      { title: "Recreación y Deportes", desc: "Gimnasios, canchas y parques con horarios." },
      { title: "Restaurantes y Comercio", desc: "Directorio comercial por categorías." },
    ],
  },
  {
    category: "Oportunidades y Crecimiento",
    icon: <BriefcaseIcon className="h-8 w-8" />,
    items: [
      { title: "Empleo", desc: "Vacantes laborales filtradas por sector." },
      { title: "Jóvenes", desc: "Becas, ofertas educativas y beneficios." },
      { title: "Directorio B2B", desc: "Conecta con empresas y profesionales." },
    ],
  },
  {
    category: "Bienestar y Salud",
    icon: <HeartIcon className="h-8 w-8" />,
    items: [
      { title: "Mascotas", desc: "Muro social de adopción y directorio veterinario." },
      { title: "Salud", desc: "Ubicación de hospitales y farmacias con horarios." },
    ],
  },
];

const AppModules = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Características Principales
          </h2>
          <p className="mt-4 text-lg text-body-color dark:text-gray-300">
            Explora los módulos diseñados para ti
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, index) => (
            <div key={index} className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-dark dark:shadow-gray-800">
              <div className="mb-6 flex items-center space-x-4">
                {/* Fondo naranja suave, icono naranja fuerte */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f96909]/10 text-[#f96909] group-hover:bg-[#f96909] group-hover:text-white transition-colors duration-300">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-[#f96909] transition-colors">
                  {mod.category}
                </h3>
              </div>
              <ul className="space-y-6">
                {mod.items.map((item, idx) => (
                  <li key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppModules;