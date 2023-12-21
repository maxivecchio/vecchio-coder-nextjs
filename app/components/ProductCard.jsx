import React from "react";
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <Link
      href={`/shop/product/${product.slug}`}
      key={product.id}
      className="bg-white shadow-[0_35px_60px_15px_rgba(0,0,0,0.1)] rounded overflow-hidden group hover:border-4 hover:border-subtle"
    >
      <div className="relative">
        <img src={product.thumbnail} alt={product.name} className="w-full" />
      </div>
      <div className="pt-4 pb-3 px-4">
        <div>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product.name}
          </h4>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${product.price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index}>
                <i className="fa-solid fa-star"></i>
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">({product.reviews})</div>
        </div>
      </div>
      <button className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        View Details
      </button>
    </Link>
  );
};

export default ProductCard;
