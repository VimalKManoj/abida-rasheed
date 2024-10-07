"use client";
import React from "react";
import { useState } from "react";
import Button from "./Button";

function Add() {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <h4 className="font-medium"> Quantity</h4>
      <div className="flex flex-col  justify-between gap-7">
        <div className="flex items-center gap-4">
          <div className="py-1 px-4 rounded-md border border-amber-950 flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity === stock}
            >
              +
            </button>
          </div>
          {stock < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex w-full gap-4">
          <Button className=" w-44 md:w-96 disabled:cursor-not-allowed mt-0 rounded-md hover:bg-amber-900 hover:text-white ">
            Buy Now
          </Button>
          <Button className="disabled:cursor-not-allowed mt-0 rounded-md bg-transparent text-amber-950">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Add;
