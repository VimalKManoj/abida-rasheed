import Image from "next/image";
import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Add from "@/components/Add";
import FeaturedProducts from "@/components/Products/FeaturedProducts";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function page() {
  return (
    <>
      <div className="w-full p-6 xl:p-14 2xl:p-20 flex flex-col md:flex-row justify-center items-start min-h-screen bg-secondary">
        <ImageSection />
        <div
          className={`${Secfont.className} w-full md:w-1/2 h-full flex justify-start items-start flex-col md:ml-10 md:pr-16  md:py-10 `}
        >
          <h1 className={`${font.className} text-3xl pb-4`}>
            Abida Rasheed Homemade Beef Pickle 200gm
          </h1>
          <div className="flex gap-4">
            <h1 className="line-through text-black/70">Rs.499.00</h1>
            <h1 className="font-semibold">Rs.399.00</h1>
          </div>
          <h2 className="text-sm text-gray-700 my-4">
            Tax included. Shipping calculated at checkout.
          </h2>
          <Add />
          <h1 className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            distinctio, ipsa hic velit cumque, recusandae ratione similique,
            aspernatur quam suscipit dolorem nesciunt quisquam quia et eius
            adipisci laudantium. Dolore, possimus.
          </h1>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}

export default page;

const ImageSection = () => (
  <div className="w-full mt-10 md:mt-0 md:w-auto flex md:pl-10 md:pr-10 py-10 flex-col">
    <div className=" xl:w-[26rem] xl:h-[26rem] 2xl:w-[30rem] 2xl:h-[30rem] border-2 border-amber-950 mb-3 bg-white flex justify-center rounded-lg ">
      <Image
        width={500}
        height={500}
        alt=""
        className="w-full h-full object-contain rounded-lg drop-shadow-xl"
        src="https://www.abidarasheed.com/cdn/shop/products/2_e900bb8b-56ff-403b-826e-9bf12d8ed9b1.jpg?v=1660031424&width=533"
      />
    </div>
    <div className=" relative flex gap-4 w-full ">
      <div className="w-[10rem] h-[10rem]  mb-3  bg-white flex justify-center rounded-lg">
        <Image
          width={500}
          height={500}
          className=" w-full h-full object-contain cursor-pointer hover:backdrop-saturate-125 rounded-lg"
          src="https://www.abidarasheed.com/cdn/shop/products/2_e900bb8b-56ff-403b-826e-9bf12d8ed9b1.jpg?v=1660031424&width=533"
          alt=""
        />
      </div>
      <div className="w-[10rem] h-[10rem]   mb-3  bg-white flex justify-center rounded-lg">
        <Image
          width={500}
          height={500}
          className=" w-full h-full object-contain cursor-pointer hover:backdrop-saturate-125 rounded-lg"
          src="https://www.abidarasheed.com/cdn/shop/products/2_e900bb8b-56ff-403b-826e-9bf12d8ed9b1.jpg?v=1660031424&width=533"
          alt=""
        />
      </div>
    </div>
  </div>
);
