// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './DemoSwiper.css';


export default function DemoSwiper() {
  
  return (
    <Swiper
      direction={'vertical'}
      modules={[Autoplay, Pagination, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={'fade'}
      autoplay={{
        delay: 3000
      }}
      pagination={{
        clickable: false
      }}
      className='demoSwiper'
    >
      <SwiperSlide><img src="images/image_1.jpg" width="90%"></img></SwiperSlide>
      <SwiperSlide><img src="images/image_2.jpg" width="90%"></img></SwiperSlide>
      <SwiperSlide><img src="images/image_3.jpg" width="90%"></img></SwiperSlide>
      <SwiperSlide><img src="images/image_4.jpg" width="90%"></img></SwiperSlide>
    </Swiper>
  );
};