import PropTypes from 'prop-types';
import capitalizeWord from '../helpers/capitalizeHelper';

const GeneralInfoRows = (props) => {
  const {
    eyeColor, hairColor, skinColor, birthYear,
  } = props;

  return (
    <ul className="details-list">
      <li className="details-item">
        <p className="detail">Eye Color</p>
        <p>{capitalizeWord(eyeColor)}</p>
      </li>
      <li className="details-item">
        <p className="detail">Hair Color</p>
        <p>{capitalizeWord(hairColor)}</p>
      </li>
      <li className="details-item">
        <p className="detail">Skin Color</p>
        <p>{capitalizeWord(skinColor)}</p>
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
