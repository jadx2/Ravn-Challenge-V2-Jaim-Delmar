import { useQuery } from '@apollo/client';
import { Waypoint } from 'react-waypoint';
import { GET_ALL_PEOPLE } from '../client/queries';
import ListButton from '../components/ListButton';
import Loader from '../components/Loader';

const Sidebar = () => {
  const {
    loading, error, data, fetchMore,
  } = useQuery(GET_ALL_PEOPLE, {
    variables: {
      after: null,
    },
  });

  if (loading) {
    return (
      <aside className="sidebar">
        <Loader />
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="sidebar">
        <p className="error">Failed to Load Data</p>
      </aside>
    );
  }

  const allPeople = data.allPeople.edges;
  const { endCursor } = data.allPeople.pageInfo;
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        {allPeople.map(({ node }, i) => (
          <li key={node.id}>
            <ListButton
              id={node.id}
              name={node.name}
              species={node.species}
              homeworld={node.homeworld}
            />
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
