import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import ProductCard from "./ProductCard";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

const ProductsList = () => {
  return (
    <div className="w-full p-6 xl:p-14 2xl:p-20 xl:py-0 2xl:py-0 flex flex-col justify-center items-center  ">
      <div className="relative w-full flex justify-between md:justify-center items-center mb-10">
        <h1 className={`${font.className} text-3xl md:text-center md:self-center`}>Products</h1>
        <FilterBy />
      </div>
      < div className="w-full flex flex-wrap justify-between md:gap-7 mb-20"> 
      {Array.from({ length: 20 })
        .map((_, index) => ({
          id: index + 1,
          name: `Product ${index + 1}`,
        }))
        .map((product) => (
          <ProductCard key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

const FilterBy = () => <div className="md:absolute right-0 md:pr-20">FilterBy</div>;
