import PropTypes from 'prop-types';

const GeneralInfoRows = (props) => {
  const {
    eyeColor, hairColor, skinColor, birthYear,
  } = props;

  return (
    <ul className="details-list">
      <li className="details-item">
        <p className="detail">Eye Color</p>
        <p>{eyeColor}</p>
      </li>
      <li className="details-item">
        <p className="detail">Hair Color</p>
        <p>{hairColor}</p>
      </li>
      <li className="details-item">
        <p className="detail">Skin Color</p>
        <p>{skinColor}</p>
      </li>
      <li className="details-item">
        <p className="detail">Birth Year</p>
        <p>{birthYear}</p>
      </li>
    </ul>
  );
};

const VehiclesInfoRow = (props) => {
  const { name } = props;

  return (
    <li className="details-item">
      <p className="detail">{name}</p>
    </li>
  );
};

GeneralInfoRows.propTypes = {
  eyeColor: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  skinColor: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
};

VehiclesInfoRow.propTypes = {
  name: PropTypes.string.isRequired,
};

export { GeneralInfoRows, VehiclesInfoRow };
