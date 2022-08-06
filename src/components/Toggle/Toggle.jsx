import React, { useContext } from 'react';
import './Toggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { themeContext } from '../../Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} />
      <div
        className="t-button"
        style={darkMode ? { left: '5px' } : { right: '5px' }}></div>
    </div>
  );
};

export default Toggle;
