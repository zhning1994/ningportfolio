import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experiences />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
