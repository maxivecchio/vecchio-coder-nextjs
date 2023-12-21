import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="w-full mx-auto max-w-xs overflow-hidden bg-background rounded-lg shadow-xl">
        <img
          className="object-cover object-center w-full h-72"
          src={
            product.thumbnail ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nOAglpmejsvQmil3kr19lwURHplsMvhv5A&usqp=CAU"
          }
          alt={product.title}
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {product.title}
          </h1>

          <p className="mt-3 text-primary-500 font-bold">$200 USD.</p>

          <button className="mt-3 px-4 py-2 w-full text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
