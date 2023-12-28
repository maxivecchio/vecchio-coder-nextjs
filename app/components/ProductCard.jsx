import React from "react";
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";

import {useCart} from '@/app/context/cartContext'

const ProductCard = ({ product }) => {

  const {addToCart} = useCart()

  const onClick = (e, product) => {
    e.preventDefault()
    addToCart(product, 1)
  }
  return (
    <Link href={`/shop/product/${product.slug}`}>
      <div className="w-full mx-auto max-w-xs overflow-hidden bg-background rounded-lg shadow-xl">
        <img
          className="object-cover object-center w-full h-72"
          src={
            product.thumbnail ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nOAglpmejsvQmil3kr19lwURHplsMvhv5A&usqp=CAU"
          }
          alt={product.name}
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {product.name}
          </h1>
          
          <p className="text-tiny">{product.category.name}</p>

          <p className="mt-3 text-primary-500 font-bold">${product.price} USD.</p>

          <button onClick={(e) => {onClick(e, product)}} className="mt-3 px-4 py-2 w-full text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <IoCartOutline className="text-xl mx-auto font-bold"/>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
