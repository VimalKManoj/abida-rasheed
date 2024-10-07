import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Della_Respira, Nunito_Sans } from "next/font/google";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

function Footer() {
  return (
    <div className="w-full bg-[#A5937B] md:h-96 relative overflow-hidden flex justify-center items-center ">
      <div
        className={`${Secfont.className} container mx-auto px-6 lg:px-20 text-background`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.webp"
              width={500}
              height={600}
              alt="image"
              className="relative md:w-52 md:h-52 h-28 w-28 z-10 mix-blend-screen"
            />
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start ">
            <h2
              className={` ${font.className} font-semibold text-2xl md:text-3xl mb-2`}
            >
              Contact
            </h2>
            <p>AR Foods, "Riverine",</p>
            <p>Mavilikadavu (PO), Vengeri,</p>
            <p>Near Govt ITI Calicut - 673010</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h2
              className={` ${font.className} font-semibold semibold text-2xl md:text-3xl mb-2`}
            >
              Feel free to get in touch!
            </h2>
            <form className="flex space-x-3 h-10">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-amber-950 flex justify-center rounded-md px-2 pb-0 text-amber-950/75 placeholder-amber-950/80 w-full"
              />
              <Button className="mt-0 rounded-md">Subscribe</Button>
            </form>
            <p className="mt-3 text-sm">
              Join our subscribers and get the best recipes delivered each week!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-amber-950 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Zero Inc. All rights reserved</p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
