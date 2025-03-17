// codigo 3 - BlogDetail.tsx
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = params;
  const blog = blogData.find((item) => item.id.toString() === id);
  if (!blog) {
    return { title: "Blog no encontrado" };
  }
  return {
    title: blog.title,
    description: blog.paragraph,
  };
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const blog = blogData.find((item) => item.id.toString() === id);
  if (!blog) {
    notFound();
  }
  return (
    <>
      <section className="pb-[120px] pt-[150px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                {/* Título del blog */}
                <h2 className="mb-8 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-tight">
                  {blog.title}
                </h2>
                {/* Información del autor, fecha, comentarios, vistas y categoría */}
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src={blog.author.image} alt={blog.author.name} fill />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-gray-700 dark:text-gray-300">
                          By <span>{blog.author.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        <span className="mr-2">
                          {/* Ícono de calendario */}
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          </svg>
                        </span>
                        {blog.publishDate}
                      </p>
                      <p className="mr-5 flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        <span className="mr-2">
                          {/* Ícono de comentarios */}
                          <svg width="18" height="13" viewBox="0 0 18 13" className="fill-current">
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0Z" />
                          </svg>
                        </span>
                        {blog.comments}
                      </p>
                      <p className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        <span className="mr-2">
                          {/* Ícono de vistas */}
                          <svg width="20" height="12" viewBox="0 0 20 12" className="fill-current">
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        {blog.views}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {blog.tags[0]}
                    </a>
                  </div>
                </div>

                {/* Contenido principal del blog */}
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {blog.paragraph}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover object-center rounded"
                      />
                    </div>
                  </div>
                  <div className="mb-10 text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {blog.content}
                  </div>
                  {blog.extendedContent && (
                    <div className="mb-10 text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {blog.extendedContent}
                    </div>
                  )}
                </div>

                {/* Sección de Tags y Compartir */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                  <div className="mb-5 sm:mb-0">
                    <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Popular Tags :
                    </h4>
                    <div className="flex items-center">
                      {blog.tags.map((tag) => (
                        <TagButton key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
