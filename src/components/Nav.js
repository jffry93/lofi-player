//STYLING
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus, darkMode, setDarkMode }) => {
  return (
    <nav>
      <h1>Music App</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <div>
          <FontAwesomeIcon icon={faMusic} />
        </div>
      </button>
    </nav>
  );
};

export default Nav;
