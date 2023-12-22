// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function DemoSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000
      }}
    >
      <SwiperSlide>
        <div>
            <p>Hello</p>
            <h2>world</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src="images/image_1.jpg" height="200px"></img></SwiperSlide>
      <SwiperSlide><img src="images/image_2.jpg" height="200px"></img></SwiperSlide>
      <SwiperSlide><img src="images/image_3.jpg" height="200px"></img></SwiperSlide>
    </Swiper>
  );
};