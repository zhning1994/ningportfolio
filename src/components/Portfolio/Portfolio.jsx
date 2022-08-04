import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import chatapp from '../../images/chatapp.PNG';
import jupiter from '../../images/Jupiter.PNG';
import medium from '../../images/Medium.PNG';
import videocall from '../../images/VideoCall.PNG';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={180}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
        <SwiperSlide>
          <img src={jupiter} alt="ecommerce-app" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chatapp} alt="chatapp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={medium} alt="medium" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={videocall} alt="videocall" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
