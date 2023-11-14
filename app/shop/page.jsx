import BreadCrumb from "../components/BreadCrum";
import SlideBar from "./components/SlideBar";
import Select from "./components/Select";
import ProductList from "./components/ProductsList";

export default function Shop() {
  return (
    <>
      <div className="px-64 pt-10">
        <BreadCrumb path='/'>Shop</BreadCrumb>
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
