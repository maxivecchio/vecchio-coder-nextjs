"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{
            clickable: true,
            bulletClass: "bullet",
            bulletActiveClass: "bullet-active"
        }}
        className="w-full"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(/images/promotional-banners.jpg)]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(/images/promotional-banners2.jpg)]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(/images/promotional-banners3.jpg)]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
