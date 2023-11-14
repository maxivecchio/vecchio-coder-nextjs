"use client";
import React from "react";
import products from "@/app/data/productos";
import BreadCrumb from "@/app/components/BreadCrum";
import Img from "@/app/shop/components/Img";
import Detalles from "@/app/shop/components/Detalles";
import Description from "@/app/shop/components/Description";

const Page = ({ params }) => {
  const { id } = params;

  const product = products.find((product) => product.id == id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleArrayChange = (event, propertyName) => {
    const { value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [propertyName]: value.split(",").map((item) => item.trim()),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Producto editado:", editedProduct);
  };

  return (
    <div className="px-64 pt-10">
      <BreadCrumb path={"/dashboard"}>
        Editar Producto: {product.name}
      </BreadCrumb>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(product).map(([clave, valor]) => {
            if (clave === "id") return null;
            return (
              <div key={clave} className="mb-4">
                <label htmlFor={clave} className="block font-semibold">
                  {clave}:
                </label>
                {Array.isArray(valor) ? (
                  <input
                    type="text"
                    id={clave}
                    name={clave}
                    value={valor.join(", ")}
                    onChange={(event) => handleArrayChange(event, clave)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                ) : (
                  <input
                    type="text"
                    id={clave}
                    name={clave}
                    value={valor}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                )}
              </div>
            );
          })}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
