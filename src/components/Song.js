import React from 'react';

const Song = ({ currentSong }) => {
  return (
    <div className='song-container'>
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.track}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
