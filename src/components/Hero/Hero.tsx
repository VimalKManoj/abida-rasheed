import React from "react";
import HeroBackground from "./HeroBackground";
import Image from "next/image";
import { Della_Respira ,Nunito_Sans } from "next/font/google";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200" ,"300","500", "600", "700" , "800" , "900" , "1000"],
});

function Hero() {
  return (
    <main className="flex flex-col  md:flex-row relative bg-background min-h-screen w-screen  justify-between items-center text-stone-800 p-6 xl:p-20 md:overflow-x-clip  ">
      <div className="md:w-[60vw]">
        <h1
          className={`${font.className} relative text-3xl text-center md:text-left md:text-4xl xl:text-5xl  2xl:text-6xl   md:mr-6 z-10 mt-20 md:mt-10`}
        >
          <span>Abida Rasheed,</span> Malabar-based chef, restaurateur, and culinary
          ambassador. She invites you to her table.{" "}
        </h1>
        <h3 className={`${Secfont.className} font-medium  text-center md:text-left text-lg relative md:w-2/3 mt-4 md:mt-10 z-10 text-stone-800/70` }>
          With roots steeped in tradition, she brings centuries-old recipes to
          life, blending the rich flavors of Kerala’s coast with a mastery of
          local ingredients and culinary techniques.
        </h3>
        <Image
          src="/images/hero_2.png"
          width={550}
          height={100}
          alt="image"
          className="hidden md:block relative  z-10 mx-auto xl:top-10 2xl:top-12"
        />
      </div>
      <div className="relative ">
        <Image
          src="/images/hero.png"
          width={500}
          height={600}
          alt="image"
          className="relative mt-4 md:mt-0 xl:top-12 2xl:top-12 z-10 rounded-md"
        />
        
      </div>
      

      <HeroBackground />
    </main>
  );
}

export default Hero;
