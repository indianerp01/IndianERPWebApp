"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperSlideComp from "./SwiperSlideComp";

const SwiperComp = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="mt-10 mb-10">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideComp />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComp;
