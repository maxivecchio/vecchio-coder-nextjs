'use client'
import ProductCard from "@/app/components/ProductCard";
import { useProducts } from "@/app/context/productContext";

export default function ProductList() {
  const {products} = useProducts();
console.log(products)
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
      {/* {products?.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))} */}
    </div>
  );
}
