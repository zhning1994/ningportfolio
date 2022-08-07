import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Portfolio.css';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="Portfolio"
      style={{
        background: darkMode ? '#242323' : '',
      }}>
      <Navbar />
    </div>
  );
};

export default Portfolio;
