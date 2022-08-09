import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Portfolio.css';
import PortfolioMe from '../components/PortfolioMe/PortfolioMe';

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
      <PortfolioMe />
    </div>
  );
};

export default Portfolio;
