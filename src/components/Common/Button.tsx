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
        text-white
        border-2 border-primary
        rounded-full
        bg-primary
        transition duration-300
        hover:bg-transparent hover:text-primary
        hover:shadow-md
      "
    >
      {children}
    </button>
  );
}
