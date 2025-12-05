const AppCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container text-center">
        <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
            ¿Quieres saber más?
        </h3>
        
        {/* BOTÓN GRANDE PARA IR A LA OTRA WEB */}
        <button 
          onClick={() => window.open("https://TU-OTRA-LANDING-PAGE.com", "_blank")}
          className="mb-10 inline-flex items-center justify-center rounded-md bg-[#f96909] px-10 py-4 text-lg font-bold text-white transition duration-300 hover:bg-[#d85a06] hover:shadow-lg hover:shadow-[#f96909]/30"
        >
          Visitar Web Oficial de Barranca Go!
        </button>

        <p className="mb-8 text-base font-medium text-gray-500 dark:text-gray-400">
          Desarrollado con tecnología de punta para potenciar nuestra ciudad.
        </p>
        
        <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                Próximamente en
            </span>
            <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
               {/* Simulación de botones de tienda */}
               <div className="flex items-center px-5 py-2 bg-black text-white rounded-lg cursor-not-allowed">
                  <span className="text-xl font-bold">App Store</span>
               </div>
               <div className="flex items-center px-5 py-2 bg-black text-white rounded-lg cursor-not-allowed">
                  <span className="text-xl font-bold">Google Play</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;