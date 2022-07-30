import React from 'react';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Zhen Ning</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Future Plan</li>
          </ul>
        </div>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
