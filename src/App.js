import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experiences />
      <Portfolio />
    </div>
  );
}

export default App;
