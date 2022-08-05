import React from 'react';
import './Experiences.css';
import nodejs from '../../images/nodejs.png';
import reactLogo from '../../images/react.png';
import book from '../../images/book.png';
import Card from '../Card/Card';

const Experiences = () => {
  return (
    <div className="skills ">
      <div className="skills-left">
        <span>My Experience &amp; Skills</span>
        <span>
          I have learnt HTML5, CSS3, ES6, Adobe Xd, Next.js and many more in
          these few year in self-taught way, whether it is about frontend
          development fundamental, backend database setup, or user interface
          design tools.
          <br />
          <br />
          Check out more details about my skills and experience.
        </span>
        <button className="btn-skills">Experience Details</button>
        <div
          className="exp-blur"
          style={{
            background: 'rgba(245, 120, 47, 0.521)',
            top: '10rem',
            width: '21rem',
            height: '11rem',
            left: '9rem',
          }}></div>
      </div>
      <div className="skills-right">
        <div style={{ left: '11rem' }}>
          <Card
            emoji={reactLogo}
            heading="Frontend Skills"
            detail="HTML5, CSS3, SASS, TailwindCSS, ES6, ReactJS, NextJS, StorybookJS, TypeScript"
          />
        </div>
        <div style={{ top: '20rem', left: '15rem' }}>
          <Card
            emoji={nodejs}
            heading="Backend Skills"
            detail="NodeJS, ExpressJS, MongoDB, MongooseJS, SanityIO, REST"
          />
        </div>
        <div style={{ top: '14rem', left: '-10rem' }}>
          <Card
            emoji={book}
            heading="Dev &amp; Design Tool "
            detail="Git, Github, Adobe Xd, Adobe Photoshop, Adobe Illustrator"
          />
        </div>
        <div
          className="exp-blur"
          style={{
            background: 'rgba(47, 156, 245, 0.521)',
            top: '12rem',
            width: '21rem',
            height: '11rem',
            left: '15rem',
          }}></div>
      </div>
    </div>
  );
};

export default Experiences;
