import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function ProductCard() {
  return (
    <div
      className={` ${Secfont.className} w-[156px] md:w-64 2xl:w-72  rounded-md overflow-hidden mb-6 p-2 hover:scale-105 cursor-pointer transition`}
    >
      <Link href={`/products/product-name`}>
        <Image
          src="https://www.abidarasheed.com/cdn/shop/products/2_e900bb8b-56ff-403b-826e-9bf12d8ed9b1.jpg?v=1660031424&width=533"
          width={200}
          height={200}
          alt=""
          className="w-full h-auto object-cover border-2 border-amber-950 rounded-md"
        />
        <h1 className="font-semibold text-sm pt-2">Product Name</h1>
        <h1 className="font-bold pt-2 ">Rs.300</h1>
      </Link>
      <Button className="mt-2 rounded-md  px-4 w-full">Add to cart</Button>
    </div>
  );
}

export default ProductCard;
