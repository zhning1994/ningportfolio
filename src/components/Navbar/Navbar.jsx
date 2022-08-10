import React, { useContext } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { themeContext } from '../../Context';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div style={{ color: darkMode ? '#93a397' : '' }} className="n-name">
          <Link className="link" to="/">
            Zhen Ning
          </Link>
        </div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ color: darkMode ? '#93a397' : '' }}>
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <Link className="link" to="/about">
              <li>About Me</li>
            </Link>
            <Link className="link" to="/experience">
              <li>Experience</li>
            </Link>
            <Link className="link" to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link className="link" to="/future">
              <li>Future Studies</li>
            </Link>
          </ul>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className={darkMode ? 'btn-contact-dark' : 'btn-contact'}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
