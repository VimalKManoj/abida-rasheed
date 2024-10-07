"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";


type CartItemsProp = {
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
};

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Shopper 'Amelia'", price: 20, quantity: 1 },
    {
      id: 2,
      name: "Wooden Tooth Brush",
      price: 18,
      originalPrice: 20,
      quantity: 2,
    },
  ]);



  // Close cart when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearCart = () => {
    setCartItems([]); // Clears all items from the cart
  };
  return (
    <>
      {/* Cart button in the nav */}
      <button onClick={() => setIsOpen(true)} className="">
      <ShoppingCart />
      </button>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md  bg-opacity-50 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={cartRef}
          className="bg-background backdrop-blur-0 border-l rounded-s-md border-amber-950 w-full max-w-md h-screen flex flex-col p-4 md:pr-10"
        >
          {/* Cart Header */}
          <div className="flex justify-between items-center pb-4 ">
            <h2 className="text-2xl font-bold">Cart (3)</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl ">
              &times;
            </button>
          </div>

          {/* "Remove All" Button */}
          <div className="flex justify-end mt-4">
            {cartItems.length > 0 && (
              <button onClick={clearCart} className="text-red-500 underline">
                Remove All
              </button>
            )}
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto mt-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty</p>
            )}
          </div>

          {/* Checkout Button */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="text-xl font-bold">$38</span>
            </div>
            <h1 className="text-sm text-black/60">Tax included. Shipping and discounts calculated at checkout.</h1>
            <Button className=" text-white w-full py-2 rounded-md text-lg">
              Checkout
            </Button>
          </div>

          {/* Keep Shopping Link */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsOpen(false) }
              className="underline text-sm"
            >
              Keep shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const CartItem = ({ name, price, originalPrice, quantity }: CartItemsProp) => {
  // Initialize totalquantity with the quantity prop
  const [totalquantity, setTotalQuantity] = useState(quantity);
  const stock = 4; // This could be dynamic, but for now it's set to 4

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && totalquantity > 1) {
      setTotalQuantity((prev) => prev - 1);
    }
    if (type === "i" && totalquantity < stock) {
      setTotalQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 pb-8 border-b border-amber-950">
      {/* Image */}
      <div className="w-20 h-20 bg-gray-300 rounded-md">
        <Image
          src="https://www.abidarasheed.com/cdn/shop/products/2_e900bb8b-56ff-403b-826e-9bf12d8ed9b1.jpg?v=1660031424&width=533"
          width={200}
          height={200}
          alt=""
          className="w-full h-auto object-cover border border-amber-950 rounded-md"
        />
      </div>

      {/* Details */}
      <div className="flex justify-between h-20 flex-col ml-4 flex-grow">
        <span className="font-semibold">{name}</span>

        <div className="py-1 px-4 rounded-md border border-amber-950 flex items-center justify-between w-28">
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("d")}
            disabled={totalquantity === 1}
          >
            -
          </button>
          {totalquantity}
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("i")}
            disabled={totalquantity === stock}
          >
            +
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end">
        {originalPrice && (
          <span className="line-through text-gray-400">${originalPrice}</span>
        )}
        <span className="text-lg font-bold">${price}</span>
      </div>
    </div>
  );
};

export default Cart;
