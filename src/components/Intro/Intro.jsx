import React from 'react';
import './Intro.css';
import Github from '../../images/github.png';
import Facebook from '../../images/facebook2.png';
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import Vector3 from '../../images/Vector3.png';
import boy from '../../images/boy.png';
import jsLogo from '../../images/javascript.png';
import deeplearning from '../../images/deep-learning.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import WebDev from '../../images/online-lesson.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>I am Zhen Ning ! </span>
          <span>Welcome To My Page</span>
          <span>
            A freshman in tech field, on the road of becoming frontend
            developer. Enthusiastic in learning new things, work hard to sharpen
            my skills. Stay hungry, stay foolish.
          </span>
        </div>
        <button className="i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={Facebook} alt="Facebook" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Vector3} alt="vector3" />
        <img src={boy} alt="boy" />
        <img className="i-jsLogo" src={jsLogo} alt="JSLogo" />
        <div style={{ top: '-4%', left: '58%' }}>
          <FloatingDiv img={WebDev} text1="Frontend" text2="Development" />
        </div>
        <div style={{ top: '23rem', left: '0rem' }}>
          <FloatingDiv img={deeplearning} text1="Backend" text2="Development" />
        </div>
        <div
          className="blur"
          style={{
            background: 'rgba(102, 176, 241, 0.2)',
            top: '3rem',
          }}></div>
        <div
          className="blur"
          style={{
            background: 'rgba(244, 187, 111, 0.8)',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}></div>
      </div>
    </div>
  );
};

export default Intro;
