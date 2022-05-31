import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
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
    }
  }
`;
