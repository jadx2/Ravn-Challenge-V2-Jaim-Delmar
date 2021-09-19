import { gql } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
  query getAllPeople($after: String) {
    allPeople(first: 5, after: $after) {
      pageInfo {
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
  query getPerson($id: ID) {
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
