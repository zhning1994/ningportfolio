import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import Experiences from '../components/Experiences/Experiences';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import { themeContext } from '../Context';
import { useContext } from 'react';
import './Home.css';
import Footer from '../components/Footer/Footer';
import Future from '../components/Future/Future';
import GoToTop from '../components/GoToTop';
import { motion } from 'framer-motion';

function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div
      className="Home"
      style={{
        background: darkMode ? '#242323' : '',
      }}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <Navbar />
      <Intro />
      <Experiences />
      <Portfolio />
      <Future />
      <Contact />
      <Footer />
      <GoToTop />
    </motion.div>
  );
}

export default Home;
