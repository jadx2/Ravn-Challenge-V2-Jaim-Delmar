import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../client/queries';
import CharacterBtn from '../components/CharacterBtn';

const Sidebar = () => {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE, {
    variables: {
      first: 5,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loding...</p>;
  if (error) return <p>{error.message}</p>;

  const allPeople = data.allPeople.edges;

  return (
    <aside>
      {allPeople.map((person) => (
        <CharacterBtn key={person.node.id} id={person.node.id} name={person.node.name} />
      ))}
    </aside>
  );
};

export default Sidebar;
