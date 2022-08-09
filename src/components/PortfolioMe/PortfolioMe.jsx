import React, { useContext } from 'react';
import './PortfolioMe.css';
import chatapp from '../../images/chatapp.PNG';
import jupiter from '../../images/Jupiter.PNG';
import medium from '../../images/Medium.PNG';
import videocall from '../../images/VideoCall.PNG';
import { themeContext } from '../../Context';

const PortfolioMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <main className="portfoliome">
      <h2>Recent Project</h2>
      <div className="portfoliome-list">
        <div className="portfoliome-card">
          <a
            href="https://jupiter-nextjs-ecommerce.vercel.app/"
            target="_blank"
            rel="noreferrer">
            <img src={jupiter} alt="Jupiter" />
          </a>
          <h3>Jupiter Ecommerce Website</h3>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Ecommerce website which is built in Nextjs, and TailwindCss.
          </p>
        </div>
        <div className="portfoliome-card">
          <a
            href="https://medium-clone-zhning1994.vercel.app/"
            target="_blank"
            rel="noreferrer">
            <img src={medium} alt="Medium" />
          </a>
          <h3>Medium Clone</h3>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Cloning layout of Medium webpage.
          </p>
        </div>
        <div className="portfoliome-card">
          <a
            href="https://agoracallapp.netlify.app/create"
            target="_blank"
            rel="noreferrer">
            <img src={videocall} alt="videocallapp" />
          </a>
          <h3>Agora Video Call</h3>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Real time video call apps with customization using ReactJS.
          </p>
        </div>
        <div className="portfoliome-card">
          <a
            href="https://github.com/zhning1994/real-time-chat"
            target="_blank"
            rel="noreferrer">
            <img src={chatapp} alt="chatapp" />
          </a>
          <h3>Real-time Chat</h3>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Real-time chat app which was built based on ReactJS and Socket.io.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PortfolioMe;
