import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SpatialAwareness from './pages/SpatialAwareness';
import Singles from './pages/Singles';
import Gasoline2024 from './pages/Gasoline2024';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spatial-awareness" element={<SpatialAwareness />} />
          <Route path="/singles" element={<Singles />} />
          <Route path="/gasoline-2024" element={<Gasoline2024 />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
