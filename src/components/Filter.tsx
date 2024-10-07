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

function Filter() {
  return (
    <div className=" w-full flex flex-col justify-center items-center  p-6 xl:p-14 2xl:p-20">
      <Categories />
    </div>
  );
}

export default Filter;

const Categories = () => (
  <div className="flex flex-col justify-center items-center w-full mb-10">
    <h1 className={`${font.className} text-3xl mb-10`}>Categories</h1>
    <div className="flex gap-4 flex-wrap items-center justify-around w-full ">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  </div>
);

const CategoryCard = () => (
  <div className="cursor-pointer hover:scale-105 transition">
    <div className="w-36 h-36 2xl:w-64 2xl:h-64 md:h-52 md:w-52 relative border-2 border-amber-950 rounded-md overflow-hidden ">
    <Image
      src="https://www.abidarasheed.com/cdn/shop/collections/SFN0052.jpg?v=1665740721&width=750"
      width={200}
      height={200}
      alt=""
      className="w-full h-full object-cover absolute "
    />
    <h1 className={`${Secfont.className} text-sm font-semibold text-center absolute bottom-0 left-0 text-white bg-amber-950 px-4 py-2 rounded-tr-md `}>Category Name</h1>
    </div>
    
    
  </div>
);


