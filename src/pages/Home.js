// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  return (
    <div className='background-image'>
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
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/f9/53/0bf953b7-476d-a019-536e-3b3e8045ee52/artwork.jpg/1200x1200bf-60.jpg" alt="Spatial Awareness" />
                  <span className="album-name">Spatial Awareness</span>
                </Link>
              </div>
              <div className="album">
                <Link to="/gasoline-2024">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/76/d9/78/76d978f5-99fa-c36b-8934-86a864453ac5/artwork.jpg/1200x1200bb.jpg" alt="Gasoline on my pillow (2024)" />
                  <span className="album-name">Gasoline on my pillow (2024)</span>
                </Link>
              </div>
            </div>
          </section>
          <section id="singles">
            <h2><Link to="/singles">Singles</Link></h2>
            <div className="singles-container">
              <Link to="/singles">
                <img className="singles-image" src="https://i.imgur.com/8UtUTVx.jpeg" alt="Singles" />
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
