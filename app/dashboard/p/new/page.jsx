"use client"
import React, { useState } from 'react';
import BreadCrumb from "@/app/components/BreadCrum";

function CreateProduct() {
    const initialProduct = {
        "name": "",
        "price": "",
        "discountPrice": "",
        "rating": "",
        "reviews": "",
        "imageSrc": "",
        "availability": true,
        "brand": "",
        "category": "",
        "sku": "",
        "sizes": [],
        "colors": [],
        "description": "",
        "weight": "",
        "material": ""
    };

    const [newProduct, setNewProduct] = useState(initialProduct);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleArrayChange = (event, propertyName) => {
        const { value } = event.target;
        setNewProduct({
            ...newProduct,
            [propertyName]: value.split(",").map((item) => item.trim()),
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nuevo Producto:", newProduct);
        setNewProduct(initialProduct);
    };

    return (
        <div className="container mx-auto p-4">
            <BreadCrumb path={"/dashboard"}>
                Volver a productos
            </BreadCrumb>
            <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(newProduct).map(([clave, valor]) => {
                    if (clave === 'id') return null;
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
                    Crear Producto
                </button>
            </form>
        </div>
    );
}

export default CreateProduct;
