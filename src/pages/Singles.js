// Singles.js
import React from 'react';
import '../styles.css';

const Singles = () => {
  const tracks = [
    {
      title: 'Gasoline on my Pillow',
      lyrics: 'lyrics/lyrics_gasoline_on_my_pillow.txt',
      video: '-8XPfhhG_Oc'
    },
    {
      title: 'Tin Man',
      lyrics: 'lyrics/lyrics_tin_man.txt',
      video: 'E5ArG8GUjf4'
    },
    {
      title: 'missile',
      lyrics: 'lyrics/lyrics_missile.txt',
      video: 'ebYkT1GFsSI'
    },
    {
      title: 'Monotone Summer',
      lyrics: 'lyrics/lyrics_monotone_summer.txt',
      video: '-0-6qf_BuKI'
    },
    {
      title: 'you don\'t love me that way',
      lyrics: 'lyrics/lyrics_you_dont_love_me_that_way.txt',
      video: 'PNn9JwNvMEA'
    }
  ];

  const handleTrackClick = (event, lyrics, videoId) => {
    event.preventDefault();

    const lyricsPath = `${process.env.PUBLIC_URL}/${lyrics}`;

    fetch(lyricsPath)
      .then(response => response.text())
      .then(text => {
        document.getElementById('lyrics-content').innerText = text;
      })
      .catch(error => {
        console.error('Error fetching the lyrics:', error);
        document.getElementById('lyrics-content').innerText = 'Lyrics not available.';
      });

    const youtubeSection = document.getElementById('youtube');
    youtubeSection.innerHTML = `
      <h2>Videos on YouTube</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

    document.getElementById('lyrics').classList.remove('hidden');
    youtubeSection.classList.remove('hidden');
  };

  return (
    
    <div className="singles"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.imgur.com/8UtUTVx.jpeg)`, // Replace with the actual image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensures the background covers the full viewport height
    }}
    >
      <header>
        <h1>Gabe Chachas - Singles</h1>
      </header>

      <nav>
        <ul>
          <li><a href="/">Back to Main Page</a></li> {/* Link to main page */}
        </ul>
      </nav>

      <main>
        <section id="tracklist" className="track-list">
          <h2>Singles</h2>
          {tracks.map((track, index) => (
            <button
              key={index}
              className="track"
              onClick={(event) => handleTrackClick(event, track.lyrics, track.video)}
            >
              {track.title}
            </button>
          ))}
        </section>

        <section id="lyrics" className="hidden">
          <h2>Lyrics</h2>
          <div id="lyrics-content">
            {/* Lyrics will be dynamically loaded here */}
          </div>
        </section>

        <section id="spotify">
          <h2>Listen on Spotify</h2>
          <a href="https://open.spotify.com/artist/7hgBcUQ1DVJjesaFgek87s?si=Hd6hpyaaSvmm1JkSSc-klA" target="_blank" rel="noopener noreferrer">Listen to the singles on Spotify</a>
        </section>

        <section id="youtube">
          <h2>Videos on YouTube</h2>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Gabe Chachas</p>
      </footer>
    </div>
    
  );
};

export default Singles;
