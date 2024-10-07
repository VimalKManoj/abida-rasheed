import React from "react";
import SwiperComponent from "../Swiper/Swiper";
import Button from "../Button";
import ArrowRightIcon from "../../../public/svg/ArrowRight";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import Link from "next/link";
import SwiperMobile from "../Swiper/SwiperMobile";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function FeaturedProducts() {
  return (
    <div className=" w-full p-6 xl:p-14 2xl:p-20 xl:py-5 2xl:py-5 bg-background">
      <div className="w-full flex justify-between  items-center my-10">
        <h1
          className={`${font.className} text-xl w-1/2 md:w-auto md:text-2xl  `}
        >
          Abida's Special Spices & Masalas
        </h1>
        <Link href="/products">
          <Button className="self-center mt-0 rounded-md">
            Shop All
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
      <div className="hidden md:block">
        <SwiperComponent />
      </div>
      <div className=" md:hidden">
        <SwiperMobile />
      </div>
    </div>
  );
}

export default FeaturedProducts;
