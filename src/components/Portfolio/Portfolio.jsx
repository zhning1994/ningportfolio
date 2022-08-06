import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import chatapp from '../../images/chatapp.PNG';
import jupiter from '../../images/Jupiter.PNG';
import medium from '../../images/Medium.PNG';
import videocall from '../../images/VideoCall.PNG';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
      <span style={{ color: darkMode ? '#93a397' : '' }}>Recent Projects</span>
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
