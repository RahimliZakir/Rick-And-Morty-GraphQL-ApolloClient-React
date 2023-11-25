import { gql } from "@apollo/client";

export const useGraphQL = () => {
  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          id
          name
          image
        }
      }
    }
  `;

  const GET_CHARACTER_DETAILS = gql`
    query getCharacterDetails($id: ID!) {
      character(id: $id) {
        id
        name
        image
        episode {
          id
          name
          episode
        }
      }
    }
  `;

  const SEARCH_LOCATIONS = gql`
    query searchLocations($name: String!) {
      locations(filter: { name: $name }) {
        results {
          id
          name
        }
      }
    }
  `;

  return {
    GET_CHARACTERS,
    GET_CHARACTER_DETAILS,
    SEARCH_LOCATIONS,
  };
};
