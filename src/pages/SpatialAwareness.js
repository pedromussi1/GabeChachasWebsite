import React from 'react';
import '../styles.css';

const SpatialAwareness = () => {
  const tracks = [
    {
      title: 'Spatial Awareness',
      lyrics: 'lyrics/lyrics_spatial_awareness.txt',
      video: 'r9DQybUFsNk'
    },
    {
      title: 'Gasoline on my Pillow',
      lyrics: 'lyrics/lyrics_gasoline_on_my_pillow.txt',
      video: 'bZ-0VxDXpb0'
    },
    {
      title: 'Drive my Mind',
      lyrics: 'lyrics/lyrics_drive_my_mind.txt',
      video: '-1A-PFF_rKA'
    },
    {
      title: 'Killer',
      lyrics: 'lyrics/lyrics_killer.txt',
      video: '-UInWTx4pfQ'
    },
    {
      title: 'Garden Bench',
      lyrics: 'lyrics/lyrics_garden_bench.txt',
      video: 'oO9z7sgD0Go'
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
    <div className="spatial-awareness"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/f9/53/0bf953b7-476d-a019-536e-3b3e8045ee52/artwork.jpg/1200x1200bf-60.jpg)`, // Replace with the actual image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensures the background covers the full viewport height
    }}
    >
      <header>
        <h1>Spatial Awareness</h1>
      </header>

      <nav>
        <ul>
          <li><a href="/">Back to Main Page</a></li>
        </ul>
      </nav>

      <main>
        <section id="tracklist" className="track-list">
          <h2>Tracklist</h2>
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
          <a href="https://open.spotify.com/album/5LX7XRLDvLGoaJ83rdwIWz?si=vFJgv3LaQzSLGRWtg43sgA" target="_blank" rel="noopener noreferrer">Listen to the album on Spotify</a>
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

export default SpatialAwareness;
