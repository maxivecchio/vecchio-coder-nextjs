"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ isOpen, closeCart }) => {
  if (!isOpen) {
    return null;
  }

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  return (
    <>
      <div className="relative font-poppins z-50">
        <div className="fixed inset-0 bg-gray-700 opacity-25"></div>
        <div className="fixed top-0 bottom-0 right-0 z-10 w-full max-w-xl bg-white">
          <div className="p-6 bg-white md:pt-12 md:pb-6 md:px-12">
            <div className="text-right">
              <button className="text-gray-700 text-xl " onClick={closeCart}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-bold  ">Shopping Cart</h2>
            </div>
            <div className="block pb-6 mb-6 -mx-4 border-b border-gray-200 md:flex">
              <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                <div className="flex w-full h-96 md:h-32 md:w-32">
                  <img
                    src="/images/products/product1.jpg"
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:2/3">
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="mb-2 text-xl font-bold ">Elegant Suit</h2>
                    <p className="mb-4 text-sm font-medium text-gray-600  ">
                      {" "}
                      Quantity: 1
                    </p>
                    <div className="flex mt-10 justify-center items-center space-x-10">
                      <div className="">
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                          <div
                            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                            onClick={() => handleQuantityChange(quantity - 1)}
                          >
                            -
                          </div>
                          <input
                            type="number"
                            className="h-8 w-8 text-base text-center border-r border-l border-gray-300"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityChange(parseInt(e.target.value, 10))
                            }
                          />
                          <div
                            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                            onClick={() => handleQuantityChange(quantity + 1)}
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="px-4 py-2 font-medium text-center text-primary border border-primary rounded-md hover:bg-primary hover:text-gray-100">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary ">$150</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-base ">
              <p>Subtotal</p>
              <p>$180</p>
            </div>
            <p className="mt-4 text-sm text-gray-500 ">
              Shipping calculated at checkout period.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Link
                href={"/checkout"}
                className="w-full text-center py-3 text-lg font-medium bg-primary rounded-md text-gray-50 hover:bg-primary/70"
              >
                checkout
              </Link>
            </div>
            <div className="flex items-center justify-center mt-6">
              <p>
                <span className="">or,</span>
                <Link
                  href={"/shop"}
                  onClick={closeCart}
                  className="pl-1 text-primary hover:underline"
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
