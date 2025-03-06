/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "tu-dominio-de-imagenes.com", // Agrega otros dominios si es necesario
        pathname: "/**", // Permite todas las rutas dentro de este dominio
      },
    ],
  },
};

module.exports = nextConfig;
