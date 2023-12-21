"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/app/components/BreadCrum";
import Img from "../../components/Img";
import Detalles from "../../components/Detalles";
import Description from "../../components/Description";

import { useProducts } from "@/app/context/productContext";

const Page = ({ params }) => {
  const { getProductBySlug } = useProducts();
  const { slug } = params;
  const [product, setProduct] = useState(null)

  useEffect( () => {
    getProductBySlug(slug).then((data)  => (setProduct(data)) )
  }, [slug]);

  return (
    <div className="px-64 pt-10">
      {product && (
        <>
        <BreadCrumb path={"/shop"}>Shop / Product / {product.name}</BreadCrumb>
          <div className="container grid grid-cols-2 gap-6">
            <Img producto={product} />
            <Detalles producto={product} />
          </div>

          <div className="pt-10">
            <Description producto={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
