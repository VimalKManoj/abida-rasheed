import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Image from "next/image";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function Culinary() {
  return (
    <div className="w-screen min-h-screen p-6  xl:px-14 2xl:px-20  flex flex-col justify-center items-center  ">
      <h1
        className={`${font.className}  text-3xl md:text-5xl 2xl:text-6xl md:w-2/3 mt-28 text-center`}
      >
        "Embark on a <span className="text-[#d59f5d]">Culinary Journey</span>:
        Explore the Authentic Flavors of North Kerala's Moplah Cuisine with
        Abida Rasheed"
      </h1>
      <div className="w-full relative  mx-auto flex justify-between items-center gap-3 md:gap-7 my-10 md:my-20 md:mb-24">
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className=" w-full h-60 md:h-96  object-cover rounded-md"
          />
        </div>

        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className="relative top-28 w-full h-60 md:h-96 object-cover rounded-md"
          />
        </div>
        <div className="flex-1 hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className=" w-full h-96  object-cover rounded-md"
          />
        </div>
        <div className="flex-1 hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="image"
            className=" w-full relative top-28 h-96  object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around start mt-32 mb-20 gap-6">
        <h1 className={`${Secfont.className} text-xl text-justify md:text-left md:text-2xl font-semibold flex-1`}>
          Immerse yourself in the spice-infused world of Malabar Muslim cooking
          with culinary maven Abida Rasheed in her Kozhikode home kitchen.
          Uncover centuries-old recipes, master aromatic blends, and savor the
          unique flavors of Moplah cuisine in this intimate, hands-on culinary
          journey through North Kerala's rich gastronomic heritage
        </h1>
        <h1 className={`${Secfont.className} text-lg text-justify md:text-left flex-1`}>
          Our culinary experience takes place in the gracious surroundings of
          Abida's home in Kozhikode (Calicut), where you will learn to cook a
          variety of Moplah dishes using authentic ingredients and techniques.
          <br />
          <br />
          Moplah cuisine is unique to the Muslims of the Malabar Coast, and is
          distinct from other Muslim cuisines such as Moghlai and Hyderabadi.
          With roots in Arabic cooking, Moplah cuisine is characterized by the
          use of fresh spices and aromatic herbs, as well as a lighter touch on
          cream and butter.
          <br />
          <br /> In this intimate and hands-on culinary experience, Abida will
          share her passion for cooking and her wealth of knowledge about the
          Moplah cuisine. You will have the opportunity to ask questions, learn
          new cooking techniques, and enjoy a delicious meal together with your
          fellow participants. <br /><br />Don't miss out on this opportunity to learn about
          and taste the authentic flavors of North Kerala's Moplah cuisine.
          Register now for Abida Rasheed's Culinary Experience!
        </h1>
      </div>
    </div>
  );
}

export default Culinary;
