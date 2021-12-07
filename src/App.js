import { useState, useRef } from 'react';
//COMPONENTS
import Song from './components/Song';
import Player from './components/Player';
import Nav from './components/Nav';
//STYLING
import './styles/app.scss';

//SONG DATA
import lofiPlaylist from './lofiPlaylist';

function App() {
  //Ref
  const audioRef = useRef(undefined);
  //STATE
  //This State is used to hold playlist data
  const [songs, setSongs] = useState(lofiPlaylist());
  //This State is used to show which song is selected
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //This State determines if the song selected is playing
  const [isPlaying, setIsPlaying] = useState(false);
  //Information of song Selected
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  //Determines if Library should be open or not
  const [libraryStatus, setLibraryStatus] = useState(false);

  //EVENT HANDLER
  //Adds values to setSongInfo state
  const timeUpdateHandler = (e) => {
    //Get Values from audio tag when it starts playing
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Round numbers to hundredths from millionths
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    //Used to determine place in song bar
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  return (
    <div className='App'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
