const AboutApp = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            ¿Qué es Barranca Go?
          </h2>
          <p className="text-lg leading-loose text-body-color dark:text-gray-300">
            Barranca Go! no es solo un directorio; es una <span className="text-[#f96909] font-bold">&quot;Super App&quot; ciudadana</span> diseñada para simplificar la vida en Barrancabermeja. Desde reportar un hueco en la vía hasta encontrar empleo, adoptar una mascota o consultar la agenda cultural del fin de semana, todo está integrado en una sola experiencia fluida y moderna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;