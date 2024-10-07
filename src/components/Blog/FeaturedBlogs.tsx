import React from "react";
import BlogCard from "./BlogCard";
import { Della_Respira, Nunito_Sans } from "next/font/google";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function FeaturedBlogs() {
  return (
    <div className=" w-full my-10 md:my-10 flex flex-col  p-6 xl:p-14 2xl:p-20 xl:py-5 2xl:py-5 mb-14">
      <h1 className={`${font.className} text-xl md:text-2xl mb-10`}>
        Explore Abida's culinary journey and upcoming experiences
      </h1>
      <div className="flex flex-col md:flex-row justify-center flex-wrap w-full gap-7 ">
        <BlogCard src="https://images.unsplash.com/photo-1544240790-eaadf65d012d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <BlogCard src="https://images.unsplash.com/photo-1477925518023-22b33cbd802c?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <BlogCard src="https://images.unsplash.com/photo-1478145189398-ec6f9e328b76?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}

export default FeaturedBlogs;
