import { gql } from '@apollo/client';

export const CHARACTER_FRAGMENT = gql`
  fragment characterFragment on Character {
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
      residents {
        id
        name
        status
      }
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
`;
