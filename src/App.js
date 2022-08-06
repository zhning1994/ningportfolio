import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
      }}>
      <Navbar />
      <Intro />
      <Experiences />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
