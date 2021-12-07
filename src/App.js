import { useState } from 'react';
//COMPONENTS
import Song from './components/Song';
import Player from './components/Player';
//STYLING
import './styles/app.scss';

//SONG DATA
import lofiPlaylist from './lofiPlaylist';

function App() {
  //STATE
  //This State is used to hold playlist data
  const [songs, setSongs] = useState(lofiPlaylist());
  //This State is used to show which song is selected
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //This State determines if the song selected is playing
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='App'>
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
