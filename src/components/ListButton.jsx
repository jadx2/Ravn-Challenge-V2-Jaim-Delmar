import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ListButton = (props) => {
  const { id, name } = props;
  const location = `/person/${id}`;

  return (
    <NavLink to={location}>
      <h2>{name}</h2>
      <FontAwesomeIcon icon={faChevronRight} />
    </NavLink>
  );
};

ListButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListButton;
