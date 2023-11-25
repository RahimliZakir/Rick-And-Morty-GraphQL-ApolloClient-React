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

  return {
    GET_CHARACTERS,
    GET_CHARACTER_DETAILS,
  };
};
