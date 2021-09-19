import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../client/queries';
import PeopleList from '../components/PeopleList';

const Sidebar = () => {
  const {
    loading, error, data, fetchMore,
  } = useQuery(GET_ALL_PEOPLE, {
    variables: {
      first: 5,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loding...</p>;
  if (error) return <p>Failed to Load Data</p>;

  const allPeople = data.allPeople.edges;
  const cursor = data.allPeople.pageInfo.endCursor;
  console.log(cursor);

  return (
    <aside>
      <PeopleList
        allPeople={allPeople}
        onLoadMore={() => fetchMore({
          varialbes: {
            first: 5,
            cursor,
          },
        })}
      />
    </aside>
  );
};

export default Sidebar;
