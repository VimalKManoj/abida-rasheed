import Image from "next/image";
import React from "react";

export default function HeroBackground() {
  return (
    <>
    <div className="absolute -top-32 -left-20 w-[400px] h-[500px] bg-[#EAD8BE]/80 rounded-full blur-2xl z-0 "></div>
      <Image
        src="/svg/hero_bg_element_1.svg"
        width={60}
        height={100}
        alt="image"
        className="hidden  md:block absolute bottom-14 left-20 z-0"
      /> 
      
      <Image
        src="/svg/hero_bg_element_1.svg"
        width={60}
        height={100}
        alt="image"
        className="hidden  md:block absolute top-24 right-60 rotate-90 z-0"
      />
      <div className="hidden  md:block  absolute -bottom-0 -right-20 w-[400px] h-[500px] bg-[#f1d9b8] rounded-full blur-2xl z-0"></div>
    </>
  );
}
