import { gql } from '@apollo/client';

export const GET_CHARACTERS_BY_IDS = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
          name
          status
        }
        created
      }
      image
      episode {
        id
        name
        air_date
        episode
        characters {
          id
          name
          status
        }
        created
      }
      created
    }
  }
`;
