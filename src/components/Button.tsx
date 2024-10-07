'use client'
import React from "react";
import { Nunito_Sans } from "next/font/google";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

const Button = ({ children, className ,onClick}: ButtonProps) => {
  return (
    <button
      className={cn(
        `${Secfont.className} px-3 py-2 bg-amber-950 border border-amber-950 flex justify-center items-center self-start mt-10 text-white hover:text-amber-950 hover:bg-white`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
