import React from 'react';
import './Footer.css';
import upArr from '../../images/up-arrow.png';
import Github from '../../images/github3.png';
import Facebook from '../../images/facebook3.png';
import LinkedIn from '../../images/linkedin3.png';
import Instagram from '../../images/instagram3.png';

const Footer = () => {
  return (
    <div className="footer">
      <button
        className="up-btn"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        <img src={upArr} alt="upbtn" />
      </button>
      <div className="footer-social">
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
      <div className="footer-name">
        Built by LOW ZHEN NING <span>&copy; 2022</span>
      </div>
    </div>
  );
};

export default Footer;
