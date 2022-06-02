import { gql } from '@apollo/client';

import { CHARACTER_FRAGMENT } from '../fragments/characterFragment.gql';

export const GET_CHARACTERS_BY_IDS = gql`
  ${CHARACTER_FRAGMENT}
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      ...characterFragment
    }
  }
`;
