import React, { useContext } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { themeContext } from '../../Context';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div style={{ color: darkMode ? '#93a397' : '' }} className="n-name">
          Zhen Ning
        </div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ color: darkMode ? '#93a397' : '' }}>
            <li>Home</li>
            <li>About Me</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Future Studies</li>
          </ul>
        </div>
        <button className="btn-contact">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
