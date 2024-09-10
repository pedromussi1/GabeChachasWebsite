import React, { useState } from 'react';

function TrackList({ tracks }) {
  const [lyrics, setLyrics] = useState('');
  const [videoId, setVideoId] = useState('');

  const handleTrackClick = (lyricsFile, videoId) => {
    setLyrics(lyricsFile);
    setVideoId(videoId);
  };

  return (
    <section id="tracklist">
      <h2>Tracklist</h2>
      <div>
        {tracks.map((track, index) => (
          <p key={index}>
            {track.image && <img src={track.image} alt={`${track.title} Cover`} />}
            <a
              href="#"
              className="track"
              onClick={(e) => {
                e.preventDefault();
                handleTrackClick(track.lyrics, track.video);
              }}
            >
              {track.title}
            </a>
          </p>
        ))}
      </div>
      {lyrics && (
        <section id="lyrics">
          <h2>Lyrics</h2>
          <div id="lyrics-content">
            {lyrics}
          </div>
        </section>
      )}
      {videoId && (
        <section id="youtube">
          <h2>Videos on YouTube</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      )}
    </section>
  );
}

export default TrackList;
