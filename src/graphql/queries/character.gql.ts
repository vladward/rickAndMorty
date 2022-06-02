import { gql } from '@apollo/client';

import { CHARACTER_FRAGMENT } from '../fragments/characterFragment.gql';

export const GET_CHARACTER = gql`
  ${CHARACTER_FRAGMENT}
  query character($id: ID!) {
    character(id: $id) {
      ...characterFragment
    }
  }
`;
