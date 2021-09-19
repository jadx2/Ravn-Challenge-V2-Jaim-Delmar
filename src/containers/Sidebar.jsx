import { useQuery } from '@apollo/client';
import { useRef, useState, useEffect } from 'react';
import { GET_ALL_PEOPLE } from '../client/queries';
import ListButton from '../components/ListButton';

const Sidebar = () => {
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery(GET_ALL_PEOPLE, {
    variables: {
      cursor: null,
    },
    // notifyOnNetworkStatusChange: true,
  });

  const observerRef = useRef(null);
  const [buttonRef, setButtonRef] = useState(null);

  useEffect(() => {
    const options = {
      root: document.querySelector('#list'),
      threshold: 0.1,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.click();
      }
    }, options);
  }, []);

  useEffect(() => {
    if (buttonRef) {
      observerRef.current.observe(document.querySelector('#load-more'));
    }
  }, [buttonRef]);

  if (loading) return <p>Loding...</p>;
  if (error) return <p>Failed to Load Data</p>;

  const allPeople = data.allPeople.edges;
  const isRefetching = networkStatus === 3;
  const { endCursor, hasNextPage } = data.allPeople.pageInfo;

  return (
    <aside>
      <ul id="list">
        {allPeople.map(({ node }) => (
          <ListButton key={node.id} id={node.id} name={node.name} />
        ))}
      </ul>
      {hasNextPage && (
        <button
          id="load-more"
          type="button"
          ref={setButtonRef}
          disabled={isRefetching}
          onClick={(e) => {
            e.preventDefault();
            fetchMore({
              variables: { after: endCursor },
            });
          }}
        >
          More
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
