import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Portfolio.css';
import PortfolioMe from '../components/PortfolioMe/PortfolioMe';
import Footer from '../components/Footer/Footer';
import GoToTop from '../components/GoToTop';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.div
      className="Portfolio"
      style={{
        background: darkMode ? '#242323' : '',
      }}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <Navbar />
      <PortfolioMe />
      <Footer />
      <GoToTop />
    </motion.div>
  );
};

export default Portfolio;
