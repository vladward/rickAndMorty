import { gql } from '@apollo/client';

export const INFO_FRAGMENT = gql`
  fragment infoFragment on Info {
    count
    pages
    next
    prev
  }
`;
