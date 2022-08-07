import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import Experiences from '../components/Experiences/Experiences';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import { themeContext } from '../Context';
import { useContext } from 'react';
import './Home.css';

function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="Home"
      style={{
        background: darkMode ? '#242323' : '',
      }}>
      <Navbar />
      <Intro />
      <Experiences />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
