import { useState } from 'react';
//COMPONENTS
import Song from './components/Song';
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

  return (
    <div className='App'>
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
    </div>
  );
}

export default App;
