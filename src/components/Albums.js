import React from 'react';

function Albums() {
  return (
    <section id="albums">
      <h2>Albums</h2>
      <div className="album">
        <a href="SpatialAwareness.html">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/f9/53/0bf953b7-476d-a019-536e-3b3e8045ee52/artwork.jpg/1200x1200bf-60.jpg" alt="Album 1 Cover" />
        </a>
        <h3><a href="SpatialAwareness.html">Spatial Awareness</a></h3>
      </div>
      <div className="album">
        <a href="gasoline2024.html">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/76/d9/78/76d978f5-99fa-c36b-8934-86a864453ac5/artwork.jpg/1200x1200bb.jpg" alt="Album 2 Cover" />
        </a>
        <h3><a href="gasoline2024.html">gasoline on my pillow (2024 version)</a></h3>
      </div>
      {/* Add more albums as needed */}
    </section>
  );
}

export default Albums;
