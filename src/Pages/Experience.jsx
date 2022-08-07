import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Experience.css';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="Experience "
      style={{
        background: darkMode ? '#242323' : '',
      }}>
      <Navbar />
    </div>
  );
};

export default Experience;
