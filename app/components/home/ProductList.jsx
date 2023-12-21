"use client";
import React from "react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useProducts } from "medusa-react";
import ProductCard from "@/components/home/ProductCard";
import Spinner from "@/components/shared/Spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductList = () => {
  const { products, isLoading } = useProducts({
    expand: "variants",
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="mt-28 text-foreground bg-gray-100 dark:bg-gray-800 py-20">
      <div>
        <Swiper
          spaceBetween={19}
          modules={[Autoplay]}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "jaservice-bullet",
            bulletActiveClass: "jaservice-bullet-active",
          }}
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
            1450: {
              slidesPerView: 4,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mb-10">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
