"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "About Abida",
      href: "/about-abida",
    },
    {
      name: "Shop",
      href: "/products",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: "Culinary Experience",
      href: "/culinary-experience",
    },
    {
      name: "Account",
      href: "/",
    },
  ];

  return (
    <div className="md:hidden">
      {/* Menu toggle button */}
      <button onClick={toggleMenu} className="">
        <Menu />
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 h-screen bg-white z-50 flex flex-col items-center justify-around transition-transform duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          X
        </button>
        <ul className="flex flex-col items-center space-y-6">
          {links.map((link, index) => (
            <Link
              key={index}
              className="text-xl"
              href={link.href}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="flex space-x-6 mt-10">
          {["Facebook", "Instagram", "Twitter"].map((link, index) => (
            <a key={index} className="text-sm" href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
