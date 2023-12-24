// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function SwiperWithProps({images}) {

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000
      }}
    >
      {images.names.map(imageName => (
        <SwiperSlide key={imageName}><img src={`images/${imageName}`} height="200px"></img></SwiperSlide>
      ))}
    </Swiper>
  );
};