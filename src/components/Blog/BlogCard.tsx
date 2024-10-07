import Image from "next/image";
import React from "react";
import { Nunito_Sans } from "next/font/google";
import ArrowRightIcon from "../../../public/svg/ArrowRight";
import Link from "next/link";

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

type BlogCardProps = {
  src: string;
};

function BlogCard({ src }: BlogCardProps) {
  return (
    
    <div
      className={`${Secfont.className} h-full md:w-[calc(33.33%-20px)] box-border flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden mb-10`}
    >
      <Link href={`/blogs/blog-name`}>
     
      <div className="w-full h-[20rem] md:h-[30rem] overflow-hidden">
      <Image
        src={src}
        width={200}
        height={300}
        className="w-full h-full hover:scale-105 transition  object-cover rounded-md"
        alt=""
      />
      </div>
     
      <h4 className="self-start text-sm text-green-800 py-3">
        12 october 2024
      </h4>
      <h1 className="text-2xl w-full font-bold pb-3  text-amber-950 border-dotted mb-3">
        Fruit and vegetables and protection against diseases
      </h1>
      <h2 className="line-clamp-2 text-black/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab natus,
        molestiae illum dolor in incidunt nam facere reiciendis veritatis,
        consequuntur sequi!
      </h2>

      <button className="self-start flex justify-center items-center mt-5">
        Read more <ArrowRightIcon />
      </button>
      </Link>
    </div>
  );
}

export default BlogCard;
