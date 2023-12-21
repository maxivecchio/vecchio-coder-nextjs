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
            bulletClass: "prismate-bullet",
            bulletActiveClass: "prismate-bullet-active"
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
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(https://www.diarioestrategia.cl/images/showid/6101836)]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(https://www.diarioestrategia.cl/images/showid/6101836)]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(https://www.diarioestrategia.cl/images/showid/6101836)]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
