import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CharacterBtn = () => {
  const character = 'Luke Skywalker';

  return (
    <li>
      <button type="button">
        <h2>{character}</h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </li>
  );
};

export default CharacterBtn;
