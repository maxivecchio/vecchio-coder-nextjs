"use client";
import React, { useEffect } from "react";
import BreadCrumb from "@/app/components/BreadCrum";
import Img from "../../components/Img";
import Detalles from "../../components/Detalles";
import Description from "../../components/Description";

import { useProducts } from "@/app/context/productContext";

const Page = ({ params }) => {
  const { selectedProduct, getProductBySlug } = useProducts();
  const { slug } = params;

  useEffect(() => {
    getProductBySlug(slug);
  }, [slug]);

  return (
    <div className="px-64 pt-10">
      <BreadCrumb path={"/shop"}>Products</BreadCrumb>

      {selectedProduct && (
        <>
          <div className="container grid grid-cols-2 gap-6">
            <Img producto={selectedProduct} />
            <Detalles producto={selectedProduct} />
          </div>

          <div className="pt-10">
            <Description producto={selectedProduct} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
