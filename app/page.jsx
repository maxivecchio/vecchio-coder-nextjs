import BreadCrumb from "@/app/components/BreadCrum";
import ProductSlider from "@/app/components/ProductSlider";
import SlideBar from "@/app/shop/components/SlideBar";
import Select from "@/app/shop/components/Select";
import ProductList from "@/app/shop/components/ProductsList";
export default function Home() {
  return (
    <>
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-12">
  <h2 className="text-2xl font-bold text-center my-2">Productos Destacados</h2>
  <ProductSlider />
</div>
      <div className="px-4 md:px-16 pt-10">
      <h2 className="text-2xl font-bold text-center my-2">Todos los Productos</h2>
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
          <SlideBar />
          <div className="col-span-3">
            <Select />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}
