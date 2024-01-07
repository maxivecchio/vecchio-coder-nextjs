import React from "react";
import Slider from "@/app/components/home/Slider";
import ProductSlider from "@/app/components/ProductSlider";
import Info from "@/app/components/home/Info";
import CategoryList from "@/app/components/home/CategoryList";
import NewsLetter from "@/app/components/home/NewsLetter";

const Home = () => {
  return (
    <section className="">
      <div>
        <Slider />
        <Info />
        <CategoryList />
        <ProductSlider />
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
