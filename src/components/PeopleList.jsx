import PropTypes from 'prop-types';
import CharacterBtn from './CharacterBtn';

const PeopleList = (props) => {
  const { allPeople, onLoadMore } = props;

  return (
    <>
      {allPeople.map((person) => (
        <CharacterBtn key={person.node.id} id={person.node.id} name={person.node.name} />
      ))}
      <button type="button" onClick={onLoadMore}>
        More
      </button>
    </>
  );
};

PeopleList.propTypes = {
  allPeople: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        homeworld: PropTypes.shape({
          name: PropTypes.string,
        }),
        species: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }),
  ).isRequired,

  onLoadMore: PropTypes.func.isRequired,
};

export default PeopleList;
