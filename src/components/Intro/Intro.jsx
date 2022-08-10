import React, { useContext } from 'react';
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
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>I am Zhen Ning ! </span>
          <span>Welcome To My Page</span>
          <span style={{ color: darkMode ? '#93a397' : '' }}>
            A freshman in tech field, on the road of becoming frontend
            developer. Enthusiastic in learning new things, work hard to sharpen
            my skills. Stay hungry, stay foolish.
          </span>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className={darkMode ? 'i-button-dark' : 'i-button'}>
          Hire Me
        </button>
        <div className="i-icons">
          <a
            href="https://github.com/zhning1994"
            target="_blank"
            rel="noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.facebook.com/laurence.low.3/"
            target="_blank"
            rel="noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/zhen-ning-low/"
            target="_blank"
            rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/laurencelzg/"
            target="_blank"
            rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Vector3} alt="vector3" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          className="i-jsLogo"
          src={jsLogo}
          alt="JSLogo"
        />
        <motion.div
          initial={{ top: '-4%', left: '65%' }}
          whileInView={{ top: '-4%', left: '58%' }}
          transition={transition}>
          <FloatingDiv img={WebDev} text1="Frontend" text2="Development" />
        </motion.div>
        <motion.div
          initial={{ top: '24rem', left: '13rem' }}
          whileInView={{ top: '24rem', left: '7rem' }}
          transition={transition}>
          <FloatingDiv img={deeplearning} text1="Backend" text2="Development" />
        </motion.div>
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
