import { useQuery } from '@apollo/client';
import allPeopleQuery from '../client/queries';
import CharacterBtn from '../components/CharacterBtn';

const Sidebar = () => {
  const { loading, error, data } = useQuery(allPeopleQuery());

  if (loading) return <p>Loding...</p>;
  if (error) return <p>{error.message}</p>;

  const allPeople = data.allPeople.edges;

  return (
    <ul>
      {allPeople.map((person) => (
        <CharacterBtn key={person.node.id} name={person.node.name} />
      ))}
    </ul>
  );
};

export default Sidebar;
