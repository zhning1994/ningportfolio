import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experiences />
    </div>
  );
}

export default App;
