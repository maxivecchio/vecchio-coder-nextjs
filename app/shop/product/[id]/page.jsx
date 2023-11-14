import React from "react";
import products from "@/app/data/productos";
import BreadCrumb from "@/app/components/BreadCrum";
import Img from "../../components/Img";
import Detalles from "../../components/Detalles";
import Description from "../../components/Description";

const Page = ({ params }) => {
  const { id } = params;

  const product = products.find((product) => product.id == id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="px-64 pt-10">
      <BreadCrumb path={'/'}>Products</BreadCrumb>

      <div className="container grid grid-cols-2 gap-6">
        <Img producto={product} />
        <Detalles producto={product} />
      </div>

      <div className="pt-10">
        <Description producto={product} />
      </div>
    </div>
  );
};

export default Page;
