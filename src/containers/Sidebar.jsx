import { useQuery, gql } from '@apollo/client';
import CharacterBtn from '../components/CharacterBtn';

const Sidebar = () => {
  const allPeople = gql`
    query {
      allPeople {
        edges {
          node {
            name
            homeworld {
              name
            }
            species {
              name
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(allPeople);

  if (loading) console.log('loading...');
  if (error) console.log(error);

  return (
    <ul>
      {data.allPeople.edges.map((person) => (
        <CharacterBtn key={person.node.id} name={person.node.name} />
      ))}
    </ul>
  );
};

export default Sidebar;
