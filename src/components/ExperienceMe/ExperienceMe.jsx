import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './ExperienceMe.css';

const ExperienceMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="expMe">
      <div className="expMe-lft">
        <h2>Skills &#38; Experiences</h2>
        <p style={{ color: darkMode ? 'white' : '' }}>
          I put more effort in frontend development since I am interested in
          creating elegrant, amusing user interface effect, animation,
          responsive layout structure. And besides that, as a beginner, frontend
          would be more easier to get started. And my experienced in fundamental
          graphic design have helped me in understanding design concept.
        </p>
        <p style={{ color: darkMode ? 'white' : '' }}>
          In order to build fullstack web apps, backend development will be
          involved, therefore, I not limited myself in frontend development. I
          have used Nodejs and ExpressJs for backend developing as I am more
          familiar to JavaScript rather than Ruby, Python. MongoDB and
          MongooseJs would be used to build database of my apps.
        </p>
        <p style={{ color: darkMode ? 'white' : '' }}>
          For development tools, I am using Git &#38; Github. I know the
          fundamental of Adobe XD, Illustrator and PhotoShop, which I think that
          it would be nice to have some design skills since I will work closely
          with both UI/UX designer and backend developer.
        </p>
        <p style={{ color: darkMode ? 'white' : '' }}>
          Feel free to view my LinkedIn for more details or contact me.{' '}
        </p>
      </div>
      <div className="expMe-rgt">
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            HTML5
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec html">60%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            CSS3
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec css">60%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            JavaScript
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec js">55%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            ReactJS
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec react">40%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            TailwindCSS
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec tailwind">35%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            NextJS
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec nextjs">25%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            NodeJS
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec nodejs">30%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            Adobe Photoshop
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec typescript">55%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            Adobe Illustrator
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec story">50%</span>
          </div>
        </div>
        <div className="expMe-skills">
          <span
            style={{ color: darkMode ? '#93a397' : '' }}
            className="expMe-title">
            AdobeXd
          </span>
          <div className="expMe-bar">
            <span className="expMe-sec xd">30%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceMe;
