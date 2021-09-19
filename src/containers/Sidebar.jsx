import { useQuery } from '@apollo/client';
import { Waypoint } from 'react-waypoint';
import { GET_ALL_PEOPLE } from '../client/queries';
import ListButton from '../components/ListButton';

const Sidebar = () => {
  const {
    loading, error, data, fetchMore,
  } = useQuery(GET_ALL_PEOPLE, {
    variables: {
      after: null,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to Load Data</p>;

  const allPeople = data.allPeople.edges;
  const { endCursor } = data.allPeople.pageInfo;

  return (
    <aside>
      <ul id="list">
        {allPeople.map(({ node }, i) => (
          <li key={node.id}>
            <ListButton id={node.id} name={node.name} />
            {i === allPeople.length - 1 && (
              <Waypoint
                onEnter={() => fetchMore({
                  variables: { after: endCursor },
                })}
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
