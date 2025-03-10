import { Metadata } from "next";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  title: "Itwana Soluciones",
  description: "Soluciones Tecnologicas",
};

export default function ServicesPage() {
  return <Services />;
}
