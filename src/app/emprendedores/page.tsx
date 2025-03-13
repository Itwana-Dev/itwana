import { Metadata } from "next";
import Emprendedores from "@/components/Emprendedores/Emprendedores";

export const metadata: Metadata = {
  title: "Itwana Soluciones - Emprendedores",
  description: "Soluciones Tecnologicas para Emprendedores",
};

export default function EmprendedoresPage() {
  return <Emprendedores />;
}
