import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { themeContext } from '../Context';
import './Future.css';

const Future = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="Future"
      style={{
        background: darkMode ? '#242323' : '',
      }}>
      <Navbar />
    </div>
  );
};

export default Future;
