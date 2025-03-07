
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itwana Soluciones",
  description: "Desarrrollo de Software",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
     
      <Testimonials />
    
      
      
    </>
  );
}
