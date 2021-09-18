import { gql } from '@apollo/client';

const getAllPeople = () => gql`
  query ($first: Int, $cursor: String) {
    allPeople(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

export default getAllPeople;
