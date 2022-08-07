import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './About.css';

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="About"
      style={{
        background: darkMode ? '#242323' : '',
      }}>
      <Navbar />
    </div>
  );
};

export default About;
