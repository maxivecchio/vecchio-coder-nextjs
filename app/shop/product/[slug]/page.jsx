"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/app/components/BreadCrum";
import Img from "@/app/shop/components/Img";
import Detalles from "@/app/shop/components/Detalles";
import Description from "@/app/shop/components/Description";

import { useProducts } from "@/app/context/productContext";

const Page = ({ params }) => {
  const { getProductBySlug } = useProducts();
  const { slug } = params;
  const [product, setProduct] = useState(null)



  useEffect( () => {
    getProductBySlug(slug).then((data)  => {
      console.log(data)
      setProduct(data)}
    )
  }, [slug]);


  return (
    <div className="px-64 pt-20">
      {product && (
        <>
        <BreadCrumb path={"/shop/all"}>Shop / Product / {product.name}</BreadCrumb>
          <div className="container grid grid-cols-2 gap-6">
            <Img producto={product} />
            <Detalles producto={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
