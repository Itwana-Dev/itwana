import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | Barranca Go!",
  description: "Políticas de privacidad y Términos y condiciones de la aplicación Barranca Go!",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Legal - Barranca Go!"
        description="Información legal, términos de uso y políticas de tratamiento de datos para la aplicación móvil Barranca Go!"
      />

      <section className="pb-[120px] pt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
              
              {/* SECCIÓN 1: POLÍTICA DE PRIVACIDAD */}
              {/* Esta es la sección crítica para la Play Store */}
              <div className="mb-16 border-b border-body-color border-opacity-10 pb-16 dark:border-white dark:border-opacity-10">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  Política de Privacidad
                </h2>
                <p className="mb-8 font-medium text-body-color">
                  Transparencia Total
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      1. ¿Qué información recopilamos realmente?
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      En Barranca Go! creemos en la minimización de datos. Solo pedimos lo necesario:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-base leading-relaxed text-body-color">
                      <li><strong>Perfil Básico:</strong> Nombre, teléfono, correo electrónico y fecha de nacimiento (para asegurar que es mayor de edad).</li>
                      <li><strong>Contenido Multimedia:</strong> Las fotos que usted sube voluntariamente para reportes ciudadanos o publicaciones de mascotas.</li>
                      <li><strong>Datos Técnicos:</strong> Modelo del dispositivo e identificadores para el envío de notificaciones push.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      2. Ubicación (No usamos GPS)
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Queremos ser claros: <strong>Esta aplicación NO rastrea, monitorea ni almacena su ubicación GPS en tiempo real.</strong>
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-base leading-relaxed text-body-color">
                      <li>Los mapas que ve son enlaces a aplicaciones externas.</li>
                      <li>Las direcciones en los reportes ciudadanos son ingresadas manualmente por usted, no detectadas automáticamente.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      3. ¿Cómo usamos sus datos? (Finalidad)
                    </h3>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li><strong>Operatividad:</strong> Para permitirle crear publicaciones, escribir reseñas y guardar favoritos.</li>
                      <li><strong>Seguridad:</strong> Para verificar su identidad y prevenir fraudes o spam en los reportes comunitarios.</li>
                      <li><strong>Mejora del Servicio (Analítica):</strong> Analizamos qué módulos son más visitados para mejorar la app.</li>
                      <li><strong>Inteligencia Comercial (ROI):</strong> Registramos clics anónimos en botones como &quot;Llamar&quot; o &quot;WhatsApp&quot; para informar a los comercios sobre la efectividad de sus anuncios.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      4. Almacenamiento y Compartición
                    </h3>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li><strong>Almacenamiento Local:</strong> Guardamos preferencias (como sus favoritos o sesión iniciada) en su dispositivo para que la app cargue más rápido.</li>
                      <li><strong>Visibilidad Pública:</strong> Tenga en cuenta que si publica en &quot;Mascotas&quot; o &quot;Reporte Ciudadano&quot;, su nombre de contacto y teléfono serán visibles para otros usuarios con el fin de facilitar la ayuda.</li>
                      <li><strong>Terceros:</strong> No vendemos sus datos. Solo compartimos información anonimizada o agregada con socios comerciales.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      5. Seguridad
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Sus datos se alojan en la infraestructura de Google Firebase, que cuenta con estándares de seguridad de clase mundial. Sin embargo, cuide su contraseña; ninguna transmisión por internet es 100% invulnerable.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      6. Sus Derechos (Eliminación de Cuenta)
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Usted tiene el control total. Puede solicitar:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-base leading-relaxed text-body-color">
                      <li>La actualización de sus datos desde el perfil.</li>
                      <li>La <strong>eliminación total de su cuenta</strong> y todos sus datos asociados. Puede hacerlo directamente desde la sección &quot;Configuración&quot; de la app o escribiendo a nuestro soporte.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECCIÓN 2: TÉRMINOS Y CONDICIONES */}
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  Términos y Condiciones
                </h2>
                <p className="mb-8 font-medium text-body-color">
                  UX Legal: Claridad y Blindaje
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      1. Introducción y Aceptación
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Bienvenido a Barranca Go!. Al crear una cuenta o utilizar nuestros servicios, usted acepta estos términos legalmente vinculantes. Si no está de acuerdo, por favor no utilice la aplicación.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      2. Alcance del Servicio (Somos un Directorio)
                    </h3>
                    <p className="text-base leading-relaxed text-body-color mb-2">
                      Barranca Go! actúa exclusivamente como una plataforma digital de agregación y difusión de información local.
                    </p>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li><strong>Naturaleza Informativa:</strong> No somos proveedores de los productos, servicios de transporte, salud o empleo listados. Somos el puente digital entre usted y la oferta de la ciudad.</li>
                      <li><strong>Sin Garantía de Resultado:</strong> No garantizamos la disponibilidad de los productos en los comercios, la llegada de rutas de bus a tiempo, ni la contratación efectiva en las ofertas de empleo.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      3. Módulos de Alto Riesgo y Responsabilidad
                    </h3>
                    <p className="text-base leading-relaxed text-body-color mb-2">
                      Para proteger su seguridad y la nuestra, usted acepta las siguientes condiciones específicas por módulo:
                    </p>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li><strong>Pagos y Trámites:</strong> La sección &quot;Pagos&quot; contiene enlaces que redirigen a portales bancarios o gubernamentales externos. Barranca Go! <strong>NO procesa dinero</strong> ni almacena datos bancarios. No somos responsables por errores en transacciones externas.</li>
                      <li><strong>Salud y Farmacias:</strong> La información médica es referencial. Esta aplicación no sustituye el consejo médico profesional ni los servicios de emergencia del Estado (123/Cruz Roja).</li>
                      <li><strong>Reporte Ciudadano:</strong> Usted es responsable legalmente de la veracidad de sus reportes. El uso de esta herramienta para difamación o falsas alarmas resultará en la suspensión de su cuenta y posibles acciones legales.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      4. Uso de Herramientas de Terceros
                    </h3>
                    <p className="text-base leading-relaxed text-body-color mb-2">
                      Para brindarle la mejor experiencia, integramos servicios externos:
                    </p>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li><strong>Mapas y Rutas:</strong> Al seleccionar &quot;Ver Mapa&quot;, será redirigido a Google Maps/Waze. No garantizamos la seguridad de las rutas sugeridas por estas aplicaciones.</li>
                      <li><strong>Contacto Directo:</strong> Los botones de &quot;Llamar&quot; o &quot;WhatsApp&quot; conectan directamente con el tercero. Barranca Go! no interviene, graba ni modera esas comunicaciones privadas.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      5. Contenido de Usuario (UGC)
                    </h3>
                    <p className="text-base leading-relaxed text-body-color mb-2">
                      En secciones participativas como &quot;Mascotas&quot; o &quot;Reporte Ciudadano&quot;:
                    </p>
                    <ul className="list-disc pl-5 text-base leading-relaxed text-body-color">
                      <li>Usted declara ser el autor o tener derecho sobre las fotos que sube.</li>
                      <li>Nos otorga una licencia gratuita y perpetua para publicar dichas imágenes en la app con el fin de ayudar en la gestión del reporte o adopción.</li>
                      <li>Prohibido subir contenido ofensivo, sexualmente explícito o que viole la privacidad de otros.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      6. Propiedad Intelectual
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      El diseño, código fuente, logotipos y la base de datos compilada de comercios son propiedad exclusiva de Barranca Go!. Está prohibido el uso de &quot;bots&quot; o &quot;scrapers&quot; para extraer nuestra información masivamente.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                      7. Publicidad
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      El servicio gratuito es financiado por publicidad. Usted acepta la visualización de banners y anuncios intersticiales (pantalla completa) durante la navegación.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;