import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  //FUNCTION TO AVOID USING USEEFFECT
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  };

  //Event Handlers
  //This function is used to Play currentSong selected
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  //Skip and reverse to track Event Handler
  const skipTrackHandler = async (direction) => {
    //goes to state holding playlist object and determines where in the array current song is
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //console.log(currentIndex);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); //If index reaches song.length it makes value 0
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      //check to see if the index is negative
      if ((currentIndex - 1) % songs.length === -1) {
        //if index is -1 set index to last index
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      //If index is Not -1 then subtract 1
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[songs.length - 1]);
    }
    if (isPlaying) audioRef.current.play();
  };

  //The function is used to convert the duration value into time
  //Ex. 100seconds = 1min and 40seconds || 1:40
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  //Must add onChange handler to avoid input error
  //When there is a change made to the audio bar input tag the songInfo state updates the currentTime
  const dragHandler = (e) => {
    //gets currentTime from audio tag in App.js
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //ADD STYLE FOR INPUT

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type='range'
            onChange={dragHandler}
          />
          <div style={trackAnim} className='animate-track'></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='skip-left'
          icon={faAngleLeft}
          size='2x'
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          icon={isPlaying ? faPause : faPlay}
          size='2x'
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skip-forward'
          icon={faAngleRight}
          size='2x'
        />
      </div>
    </div>
  );
};

export default Player;
