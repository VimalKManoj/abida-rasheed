'use client'
import Link from "next/link";
import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import MenuMobile from "./MobileMenu";
import { motion } from "framer-motion"

const links = [
  { name: "About Abida", href: "/about-abida" },
  { name: "Shop", href: "/products" },
  { name: "Blog", href: "/blogs" },
  { name: "Culinary Experience", href: "/culinary-experience" },
];


const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function Header() {
  const pathname = usePathname();
  return (
    <div className="relative">
      <div
        className={`${Secfont.className} fixed z-50 top-0 w-screen bg-background/90 backdrop-blur-xl  flex justify-between items-center p-6 border-b border-white font-semibold`}
      >
        <MenuMobile /> 
        <div className=" hidden md:flex gap-10 ml-10  ">
         {links.map((link)=>{
           return (
             <Link key={link.name} href={link.href} className="relative">
              {link.href === pathname && <motion.span layoutId="underline" className="absolute left-0 w-full top-12 block h-[1px] bg-black"></motion.span>}
               <div className="text-black">{link.name}</div>
             </Link>
           )
         })}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold ">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width={500}
              height={600}
              alt="image"
              className="relative w-20 h-20 z-10 object-cover py-3"
            />
          </Link>
        </div>
        <div className="flex gap-10 md:mr-10">
          <Cart />

          <Link className="hidden md:block" href="/">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
