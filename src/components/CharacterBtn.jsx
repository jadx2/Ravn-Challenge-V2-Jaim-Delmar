import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CharacterBtn = (props) => {
  const { name } = props;

  return (
    <li>
      <button type="button">
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </li>
  );
};

CharacterBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CharacterBtn;
