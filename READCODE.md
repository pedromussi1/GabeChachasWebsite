<h1>Code Breakdown</h1>

<p>This page provides an explanation of the code used to create an artist's website for Gabe Chachas. The website was built using React, React Router, and CSS, and is deployed using Nginx.</p>

<h2>Project Structure</h2>
            <p>The project is organized into the following main directories:</p>
            <ul>
                <li><strong>components</strong>: Contains reusable components like the header.</li>
                <li><strong>pages</strong>: Contains the individual pages of the website (e.g., Home, Spatial Awareness).</li>
                <li><strong>styles.css</strong>: Contains the styling for the website.</li>
                <li><strong>Dockerfile</strong>: Used to build and deploy the project using Nginx.</li>
            </ul>

<h2>App Component</h2>
            <p>The <code>App</code> component serves as the root component of the website. It uses React Router to navigate between pages.</p>
            <pre>
<code>
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
</code>
</pre>

<p><strong>Explanation:</strong></p>
    <ul>
      <li>The <code>Router</code> component wraps the entire application, enabling navigation between pages.</li>
      <li>The <code>Header</code> component is displayed on all pages.</li>
      <li>The <code>Routes</code> component defines the different routes and their corresponding components.</li>
    </ul>
        

        
<h2>Header Component</h2>
<p>The <code>Header</code> component serves as the navigation bar for the site, providing links to various sections.</p>
            
<pre><code>
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav>
        <ul>
          <Link to="/">Home</Link></li>
          <Link to="/spatial-awareness">Spatial Awareness</Link></li>
          <Link to="/singles">Singles</Link></li>
          <Link to="/gasoline-2024">Gasoline 2024</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
</code>
            </pre>
            <p><strong>Explanation:</strong> The <code>Header</code> provides navigation links to different sections of the site using the <code>Link</code> component from React Router.</p>
        </div>

        <div class="section">
            <h2>Home Page</h2>
            <p>The <code>Home</code> page serves as the landing page, displaying information about the artist and links to different albums and singles.</p>
            <pre>
<code>
// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  return (
    <div className="background-image">
      <div className="home">
        <header>
          <h1>Gabe Chachas</h1>
          <p>Welcome to the official website of Gabe Chachas</p>
        </header>
        <main>
          <section id="albums">
            <h2>Albums</h2>
            <div className="album-container">
              <div className="album">
                <Link to="/spatial-awareness">
                  <img src="https://example.com/spatial-awareness.jpg" alt="Spatial Awareness" />
                  <span className="album-name">Spatial Awareness</span>
                </Link>
              </div>
              <div className="album">
                <Link to="/gasoline-2024">
                  <img src="https://example.com/gasoline-2024.jpg" alt="Gasoline on my pillow (2024)" />
                  <span className="album-name">Gasoline on my pillow (2024)</span>
                </Link>
              </div>
            </div>
          </section>
          <section id="singles">
            <h2><Link to="/singles">Singles</Link></h2>
            <div className="singles-container">
              <Link to="/singles">
                <img className="singles-image" src="https://example.com/singles.jpg" alt="Singles" />
              </Link>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <p>&copy; 2024 Gabe Chachas</p>
      </footer>
    </div>
  );
};

export default Home;
</code>
            </pre>
            <p><strong>Explanation:</strong> The <code>Home</code> page includes sections for albums and singles, with links that navigate to their respective pages. It uses images and links to enhance the visual appeal and interactivity of the page.</p>
        </div>

        <!-- Add other sections in a similar manner, explaining other parts of the code as needed -->
        
        <footer>
            <p>&copy; 2024 Gabe Chachas. All rights reserved.</p>
        </footer>
    </div>
