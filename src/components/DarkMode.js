import { useEffect } from 'react';
//FONT AWESOME STYLING
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkMode = ({ darkMode, setDarkMode, currentSong }) => {
  //On Component load the localStorage adds darkMode state as value
  useEffect(() => {
    const mainContainer = document.body;
    //Takes the value saved in local storage and makes it the state
    if (darkMode === undefined) {
      setDarkMode(localStorage.LightTheme);
      // mainContainer.classList.add('dark-mode-active');
      mainContainer.style.backgroundImage = `linear-gradient(180deg, ${currentSong.color[0]}, ${currentSong.color[1]})`;
    }
    //Set initial values based on local storage value
    if (localStorage.LightTheme === 'light-mode') {
      setDarkMode(false);
      mainContainer.classList.remove('dark-mode-active');
      mainContainer.style.backgroundImage = `linear-gradient(180deg, ${currentSong.color[0]}, ${currentSong.color[1]})`;
    }
    if (localStorage.LightTheme === 'dark-mode') {
      setDarkMode(true);
      mainContainer.classList.add('dark-mode-active');
      mainContainer.style.backgroundImage = 'linear-gradient(#181818, #242424)';
    } else {
    }
  });

  const updateStorage = () => {
    //If there is no LightTheme value in localStorage
    if (darkMode === undefined) {
      localStorage.setItem('LightTheme', 'dark-mode');
      setDarkMode(true);
      console.log(localStorage);
    }
    if (darkMode === true) {
      localStorage.setItem('LightTheme', 'light-mode');
      setDarkMode(false);
      console.log(localStorage);
    }
    if (darkMode === false) {
      localStorage.setItem('LightTheme', 'dark-mode');
      setDarkMode(true);
      console.log(localStorage);
    }
  };

  return (
    <div className={`dark-mode-container ${darkMode ? 'moon' : 'sun'}`}>
      <FontAwesomeIcon onClick={() => updateStorage()} icon={faSun} size='2x' />
      <FontAwesomeIcon onClick={() => updateStorage()} icon={faMoon} />
    </div>
  );
};

export default DarkMode;
