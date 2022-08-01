import React from 'react';
import './Intro.css';
import Github from '../../images/github.png';
import Facebook from '../../images/facebook (2).png';
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import Vector3 from '../../images/Vector3.png';
import boy from '../../images/boy.png';
import jsLogo from '../../images/javascript.png';
import css3 from '../../images/css.png';
import reactLogo from '../../images/react.png';
import book from '../../images/book.png';
import deeplearning from '../../images/deep-learning.png';

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
        <img className="i-book" src={book} alt="book" />
        <img className="i-jsLogo" src={jsLogo} alt="jsLogo" />
        <img className="i-css3" src={css3} alt="css3" />
        <img className="i-react" src={reactLogo} alt="react" />
      </div>
    </div>
  );
};

export default Intro;
