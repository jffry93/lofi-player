import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //ref
  const audioRef = useRef(null);

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

  return (
    <div className='player'>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-left' icon={faAngleLeft} size='2x' />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          icon={isPlaying ? faPause : faPlay}
          size='2x'
        />
        <FontAwesomeIcon
          className='skip-forward'
          icon={faAngleRight}
          size='2x'
        />
        <audio ref={audioRef} src={currentSong.audio}></audio>
      </div>
    </div>
  );
};

export default Player;
