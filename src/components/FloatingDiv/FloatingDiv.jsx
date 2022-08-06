import React, { useContext } from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';

const FloatingDiv = ({ img, text1, text2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv">
      <img src={img} alt="intro" />
      <span style={{ color: darkMode ? 'black' : '' }}>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
