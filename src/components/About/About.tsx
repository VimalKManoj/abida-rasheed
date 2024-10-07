import Image from "next/image";
import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Link from "next/link";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function About() {
  return (
    <div className="w-screen my-10 md:my-0  p-6  xl:p-14 2xl:p-20 2xl:py-16 flex flex-col md:flex-row justify-between items-center  ">
      <div className=" flex flex-1  ">
        <Image
          src="https://images.unsplash.com/photo-1607567144049-fd6336563076?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1000}
          height={1000}
          alt="image"
          className="w-[12rem] md:w-[17rem]  xl:w-[18rem] 2xl:w-auto xl:h-[30rem] 2xl:h-[40rem] object-cover mr-6 rounded-md"
        />
        <div className="w-full flex-1 md:h-[36rem] relative xl:top-14 2xl:top-20">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className=" h-1/2 pb-3 object-cover rounded-md"
          />
          <Image
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className="h-1/2 pt-3 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="h-screen flex  justify-center items-center md:p-6 md:ml-6 flex-1 flex-col  text-center mt-6 md:text-left">
        <h1
          className={`${font.className} text-4xl xl:text-5xl  2xl:text-6xl mb-10`}
        >
          Discover the heart and soul behind Malabar's renowned cuisine.
        </h1>
        <h1 className={`${Secfont.className} text-stone-800/70`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugiat reprehenderit ullam, excepturi eaque vero voluptatem esse minus
          earum debitis facilis id at illo ducimus culpa commodi dignissimos non
          consequatur?
        </h1>
        <Link
          href="/about-abida"
          className={`${Secfont.className} px-3 py-2 bg-amber-950 border border-amber-950 flex justify-center items-center md:self-start mt-4 md:mt-10 text-white hover:text-amber-950 hover:bg-white rounded-md`}
        >
          About Abida
        </Link>
      </div>
    </div>
  );
}

export default About;
