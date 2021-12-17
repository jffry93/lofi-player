const LibrarySong = ({
  song, //individual song
  songs, //all songs
  setSongs,
  id, //song.id
  currentSong,
  setCurrentSong, //song currently selected
  audioRef, //audio tag of song playing
  isPlaying, //if song is playing
}) => {
  //Event Handler
  //makes song clicked in the library the current song
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    //check if the song is playing and continues if true
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
      //Used to highlight current song in library
      style={{
        background: `${
          song.active
            ? `linear-gradient(to left, ${currentSong.color[0]}, ${currentSong.color[1]})`
            : ''
        }`,
      }}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className='song-description'>
        <h3>{song.track}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
