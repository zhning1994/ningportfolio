import React, { useContext } from 'react';
import './Experiences.css';
import nodejs from '../../images/nodejs.png';
import reactLogo from '../../images/react.png';
import book from '../../images/book.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 3, type: 'spring' };
  const navigate = useNavigate();
  return (
    <div className="skills ">
      <div className="skills-left">
        <span>My Experience &amp; Skills</span>
        <span style={{ color: darkMode ? '#93a397' : '' }}>
          I have learnt HTML5, CSS3, ES6, Adobe Xd, Next.js and many more in
          these few year in self-taught way, whether it is about frontend
          development fundamental, backend database setup, or graphic and user
          interface design tools.
          <br />
          <br />
          Check out more details about my skills and experience.
        </span>
        <button
          onClick={() => navigate('/experience')}
          className={darkMode ? 'btn-skills-dark' : 'btn-skills'}>
          Experience Details
        </button>
        <div
          className="exp-blur"
          style={{
            background: 'rgba(245, 120, 47, 0.521)',
            top: '10rem',
            width: '21rem',
            height: '11rem',
            left: '9rem',
            visibility: darkMode ? 'hidden' : 'visible',
          }}></div>
      </div>
      <div className="skills-right">
        <motion.div
          initial={{ left: '30rem' }}
          whileInView={{ left: '11rem' }}
          transition={transition}>
          <Card
            emoji={reactLogo}
            heading="Frontend Skills"
            detail="HTML5, CSS3, SASS, TailwindCSS, ES6, ReactJS, NextJS, StorybookJS, TypeScript"
          />
        </motion.div>
        <motion.div
          initial={{ top: '20rem', right: '1rem' }}
          whileInView={{ top: '20rem', left: '15rem' }}
          transition={transition}>
          <Card
            emoji={nodejs}
            heading="Backend Skills"
            detail="NodeJS, ExpressJS, MongoDB, MongooseJS, SanityIO, REST"
          />
        </motion.div>
        <motion.div
          initial={{ top: '14rem', left: '-5%' }}
          whileInView={{ top: '14rem', left: '-10rem' }}
          transition={transition}>
          <Card
            emoji={book}
            heading="Dev &amp; Design Tool "
            detail="Git, Github, Adobe Xd, Adobe Photoshop, Adobe Illustrator"
          />
        </motion.div>
        <div
          className="exp-blur"
          style={{
            background: 'rgba(47, 156, 245, 0.521)',
            top: '12rem',
            width: '21rem',
            height: '11rem',
            left: '15rem',
            visibility: darkMode ? 'hidden' : 'visible',
          }}></div>
      </div>
    </div>
  );
};

export default Experiences;
