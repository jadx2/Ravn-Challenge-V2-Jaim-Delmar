import { gql } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
  query ($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
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

const GET_PERSON = gql`
  query ($id: ID) {
    person(id: $id) {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;

export { GET_ALL_PEOPLE, GET_PERSON };
