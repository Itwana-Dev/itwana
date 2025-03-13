"use client";

import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface CTAButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function CTAButton({ onClick, children }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        px-8 py-4
        text-lg font-semibold
        text-primary
        border-2 border-primary
        rounded-full
        bg-transparent
        transition duration-300
        hover:bg-primary hover:text-white
        hover:shadow-md
      "
    >
      <Image
        src="/images/logo/whatsapp.svg"
        alt="WhatsApp icon"
        width={40}
        height={40}
        className="mr-2"
      />
      {children}
    </button>
  );
}
