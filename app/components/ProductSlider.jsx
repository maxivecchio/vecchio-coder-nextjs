"use client";

import ProductCard from "@/app/components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useProducts } from "@/app/context/productContext";

export default function ProductSlider() {
  const { products } = useProducts();

  return (
    <div className="px-4 md:px-32">
      <Swiper
        spaceBetween={19}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
      >
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
