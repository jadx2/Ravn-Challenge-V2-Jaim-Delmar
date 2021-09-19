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
  const { endCursor, hasNextPage } = data.allPeople.pageInfo;
  const isLoading = networkStatus === 7;

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
          onClick={(e) => {
            e.preventDefault();
            fetchMore({
              variables: { after: endCursor },
            });
          }}
        >
          {isLoading ? <p>Loading...</p> : ''}
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
