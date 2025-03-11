"use client";

import { MouseEventHandler, ReactNode } from "react";

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
      {children}
    </button>
  );
}
