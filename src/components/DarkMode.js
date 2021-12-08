import { useEffect } from 'react';
//FONT AWESOME STYLING
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkMode = ({ darkMode, setDarkMode }) => {
  //On Component load the localStorage adds darkMode state as value
  useEffect(() => {
    //Takes the value saved in local storage and makes it the state
    if (darkMode === undefined) {
      setDarkMode(localStorage.LightTheme);
    }
    //Set initial values based on local storage value
    if (localStorage.LightTheme === 'light-mode') {
      setDarkMode(false);
    }
    if (localStorage.LightTheme === 'dark-mode') {
      setDarkMode(true);
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
    <div className='dark-mode-container'>
      <FontAwesomeIcon
        onClick={() => updateStorage()}
        className='play'
        icon={darkMode ? faMoon : faSun}
        size='2x'
      />
    </div>
  );
};

export default DarkMode;