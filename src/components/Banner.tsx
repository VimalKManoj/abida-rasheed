import Image from "next/image";
import React from "react";
import { Della_Respira } from "next/font/google";
import { cn } from "@/utils/cn";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

function Banner({
  src,
  caption,
  className,
}: {
  src: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        ` w-full bg-background h-[20rem] md:h-[35rem] relative overflow-hidden flex justify-center items-center`,
        className
      )}
    >
      <div className="w-full h-full bg-amber-800/70 absolute top-0 "></div>
      <Image
        src={src}
        layout="fill"
        className="w-full h-full  object-cover opacity-70 absolute"
        alt=""
      />
      <h1
        className={`${font.className} text-3xl md:text-5xl text-white z-20 w-3/4 text-center`}
      >
        {caption}
      </h1>
    </div>
  );
}

export default Banner;
