import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Experience.css';
import ExperienceMe from '../components/ExperienceMe/ExperienceMe';
import Footer from '../components/Footer/Footer';
import GoToTop from '../components/GoToTop';
import { motion } from 'framer-motion';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.div
      className="Experience "
      style={{
        background: darkMode ? '#242323' : '',
      }}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <Navbar />
      <ExperienceMe />
      <Footer />
      <GoToTop />
    </motion.div>
  );
};

export default Experience;
