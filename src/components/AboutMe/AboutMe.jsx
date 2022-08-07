import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './AboutMe.css';
import me from '../../images/me.jpg';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const transition = { duration: 3, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="aboutme">
      <motion.div
        initial={{ left: '-11rem' }}
        whileInView={{ left: '0rem' }}
        transition={transition}
        className="aboutme-left">
        <img src={me} alt="zhenning" />
      </motion.div>
      <div className="aboutme-right">
        <p className="about-1">About Me</p>
        <div className="about-2">
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Hi buddy! My name is Zhen Ning. I'm a self-taught and newcomer on
            Front-End Development.
          </p>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            Back in 2018, my friend had introduced Udemy to me as I keen to
            learn some IT related skills. Udemy features web development
            courses, programming languages as top courses, I take a web
            development course to give it a try. And this course is a real
            eye-opener for me. User interface effects, animation, dynamic and
            interactive web design can be so much fun.
          </p>
          <p style={{ color: darkMode ? '#93a397' : '' }}>
            I keep learning everyday, and becoming more and more interested in
            frontend development. Now, I am on the road to become a frontend
            developer, it is difficult for me but never give up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
