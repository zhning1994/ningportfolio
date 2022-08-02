import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = ({ img, text1, text2 }) => {
  return (
    <div className="floatingdiv">
      <img src={img} alt="intro" />
      <span>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
