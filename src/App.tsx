import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';
import OpenSpace from './pages/OpenSpace';
import Offices from './pages/Offices';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-space" element={<OpenSpace />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
