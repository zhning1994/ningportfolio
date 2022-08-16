import React, { useContext } from 'react';
import './Future.css';
import figma from '../../images/figma.png';
import blockchain from '../../images/blockchain.png';
import jest from '../../images/jest.png';
import threejs from '../../images/threejs.png';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../Context';

const Future = () => {
  const navigate = useNavigate();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="future">
      <div className="future-header">
        <p style={{ color: darkMode ? '#93a397' : '' }}>Future Plan</p>
        <p>What I am Going to Explore Next</p>
      </div>
      <div className="future-cards">
        <div className="future-card">
          <div
            style={{ backgroundColor: darkMode ? '#242323' : '' }}
            className="future-box">
            <div
              style={{ backgroundColor: darkMode ? '#242323' : '' }}
              className="future-content">
              <div className="future-details">
                <div className="future-img">
                  <img src={figma} alt="figma" />
                </div>
                <h4 style={{ color: darkMode ? '#93a397' : '' }}>Figma</h4>
                <p>
                  Figma is good for collaboration, design process will be more
                  convenience since there is no cloud syncing, all files store
                  on cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="future-card">
          <div
            style={{ backgroundColor: darkMode ? '#242323' : '' }}
            className="future-box">
            <div
              style={{ backgroundColor: darkMode ? '#242323' : '' }}
              className="future-content">
              <div className="future-details">
                <div className="future-img">
                  <img src={jest} alt="jest" />
                </div>
                <h4 style={{ color: darkMode ? '#93a397' : '' }}>Jest</h4>
                <p>
                  Testing is neccessary to ensure that code we write is
                  performed as what we espected and reducing bugs. Jest.js is
                  one of great choice for doing test.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="future-card">
          <div
            style={{ backgroundColor: darkMode ? '#242323' : '' }}
            className="future-box">
            <div
              style={{ backgroundColor: darkMode ? '#242323' : '' }}
              className="future-content">
              <div className="future-details">
                <div className="future-img">
                  <img src={threejs} alt="threejs" />
                </div>
                <h4 style={{ color: darkMode ? '#93a397' : '' }}>Three.js</h4>
                <p>
                  3D animation in website would be stunning, attract users
                  attention, and bring positive impact on branding recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="future-card">
          <div
            style={{ backgroundColor: darkMode ? '#242323' : '' }}
            className="future-box">
            <div
              style={{ backgroundColor: darkMode ? '#242323' : '' }}
              className="future-content">
              <div className="future-details">
                <div className="future-img">
                  <img src={blockchain} alt="blockchain" />
                </div>
                <h4 style={{ color: darkMode ? '#93a397' : '' }}>Blockchain</h4>
                <p>
                  I want to explore more on Web 3.0. Before that, I want to
                  understand what is blokchain technologies which related to Web
                  3.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/future')}
        className={darkMode ? 'btn-future-dark' : 'btn-future'}>
        Checkout More
      </button>
    </div>
  );
};

export default Future;
