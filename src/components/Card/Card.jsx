import React, { useContext } from 'react';
import './Card.css';
import { themeContext } from '../../Context';

const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? 'black' : '' }} className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? '#93a397' : '' }}>{detail}</span>
    </div>
  );
};

export default Card;
