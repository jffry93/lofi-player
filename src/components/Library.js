import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <div className='library-title'>
        <h2>Library</h2>
      </div>
      <div className='library-songs'>
        {/* Use map() to sort through playlist object and create a library song component for each idex */}
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
