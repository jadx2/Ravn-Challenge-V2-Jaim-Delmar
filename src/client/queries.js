import { gql } from '@apollo/client';

const allPeopleQuery = () => gql`
  query {
    allPeople {
      edges {
        node {
          id
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

export default allPeopleQuery;
