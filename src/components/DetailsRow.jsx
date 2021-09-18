import PropTypes from 'prop-types';

const GeneralInfoRows = (props) => {
  const {
    eyeColor, hairColor, skinColor, birthYear,
  } = props;

  return (
    <ul>
      <li>
        <p>Eye Color</p>
        <p>{eyeColor}</p>
      </li>
      <li>
        <p>Hair Color</p>
        <p>{hairColor}</p>
      </li>
      <li>
        <p>Skin Color</p>
        <p>{skinColor}</p>
      </li>
      <li>
        <p>Birth Year</p>
        <p>{birthYear}</p>
      </li>
    </ul>
  );
};

const VehiclesInfoRow = (props) => {
  const { name } = props;

  return <li>{name}</li>;
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
