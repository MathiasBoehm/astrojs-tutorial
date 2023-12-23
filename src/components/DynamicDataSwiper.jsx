// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function DynamicDataSwiper() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/endpoint.json');
      const data = await res.json();
      
      setPersons(data);
    };

    fetchData().catch(console.error);
    
  }, []);

  

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
      {persons.map(person => (
        <SwiperSlide key={person.id}>{person.name}</SwiperSlide>
      ))}
    </Swiper>
  );
};