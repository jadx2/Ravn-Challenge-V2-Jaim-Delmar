import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ListButton = (props) => {
  const {
    id, name, species, homeworld,
  } = props;
  const location = `/person/${id}`;

  return (
    <Link className="sidebar-link" to={location}>
      <div className="character">
        <h2>{name}</h2>
        <p className="small">
          {!species ? `Human from ${homeworld.name}` : `${species.name} from ${homeworld.name}`}
        </p>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
};

ListButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.shape({
    name: PropTypes.string,
  }),
  homeworld: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

ListButton.defaultProps = {
  species: null,
};

export default ListButton;
