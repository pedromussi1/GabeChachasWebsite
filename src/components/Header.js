import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Gabe Chachas</h1>
      <p>Welcome to the official website of Gabe Chachas</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/spatial-awareness">Spatial Awareness</Link></li>
          <li><Link to="/singles">Singles</Link></li>
          <li><Link to="/gasoline-2024">Gasoline 2024</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
