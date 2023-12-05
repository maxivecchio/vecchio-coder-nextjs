import BreadCrumb from "@/app/components/BreadCrum";
import ProductSlider from "@/app/components/ProductSlider";
import SlideBar from "@/app/shop/components/SlideBar";
import Select from "@/app/shop/components/Select";
import ProductList from "@/app/shop/components/ProductsList";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-12">
        <h2 className="text-2xl font-bold text-center my-2">
          Productos Destacados
        </h2>
        <ProductSlider />
      </div>
      <div className="p-4 flex items-center justify-center">
          <Link href={'/shop'}>
             <button className="py-2 px-4 bg-foreground text-background">Ver todos los productos</button>
          </Link>
          </div>
    </>
  );
}
