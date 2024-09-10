// Gasoline2024.js
import React from 'react';
import '../styles.css';

const Gasoline2024 = () => {
  const tracks = [
    {
      title: 'Gasoline on my Pillow 2024',
      lyrics: 'lyrics/lyrics_gasoline_on_my_pillow.txt',
      video: 'WoSTWJgV5p0'
    },
    {
      title: 'socks',
      lyrics: 'lyrics/lyrics_socks.txt',
      video: 'UWa4ng3VHJs'
    },
    {
      title: 'daisy cutter',
      lyrics: 'lyrics/lyrics_daisy_cutter.txt',
      video: 'bI_Mta2f6p0'
    },
    {
      title: 'knowing the taste',
      lyrics: 'lyrics/lyrics_knowing_the_taste.txt',
      video: 'u4pGAxL3gq0'
    },
    {
      title: 'does she know i want it all?',
      lyrics: 'lyrics/lyrics_does_she_know_i_want_it_all.txt',
      video: 'a4gmKf1_8j8'
    },
    {
      title: 'you don\'t love me that way',
      lyrics: 'lyrics/lyrics_you_dont_love_me_that_way.txt',
      video: 'PNn9JwNvMEA'
    },
    {
      title: 'gasoline on my pillow',
      lyrics: 'lyrics/lyrics_gasoline_on_my_pillow.txt',
      video: 'YCu1_mJdkKU'
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
    <div
      className="gasoline-2024"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/76/d9/78/76d978f5-99fa-c36b-8934-86a864453ac5/artwork.jpg/1200x1200bb.jpg)`, // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures the background covers the full viewport height
      }}
    >
      <header>
        <h1>Gasoline on my Pillow (2024)</h1>
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
          <a href="https://open.spotify.com/album/3MfprAXxcz6Ss4Engblxzn?si=EcyD8sfBQmW_Fb32zLmLUg" target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
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

export default Gasoline2024;