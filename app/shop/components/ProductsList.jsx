"use client";
import ProductCard from "@/app/components/ProductCard";
import { useProducts } from "@/app/context/productContext";
import { useEffect, useState } from "react";

export default function ProductsList({ slug }) {
  const { products: allProducts, getProductsByCategory } = useProducts();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Define una función asincrónica dentro de useEffect
    const fetchProducts = async () => {
      if (slug === "all") {
        console.log("Entre en all");
        console.log(allProducts);
        setProducts(allProducts);
      } else {
        console.log("No estoy en all"); 

        try {
          const productsByCategory = await getProductsByCategory(slug);
          if (!productsByCategory.success) {
            console.log("a");
          } else {
            setProducts(productsByCategory);
          }
        } catch (error) {
          console.error("Error al obtener productos por categoría.");
        }
      }
    };

    // Llama a la función asincrónica
    fetchProducts();
  }, [slug, allProducts]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
