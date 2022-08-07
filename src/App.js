import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import Future from './Pages/Future';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/future" element={<Future />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
