import { gql } from '@apollo/client';

import { CHARACTER_FRAGMENT } from '../fragments/characterFragment.gql';
import { INFO_FRAGMENT } from '../fragments/infoFragment.gql';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    ${INFO_FRAGMENT}
    ${CHARACTER_FRAGMENT}
    characters(page: $page, filter: $filter) {
      info {
        ...infoFragment
      }
      results {
        ...characterFragment
      }
    }
  }
`;
