// src/queries.js
import { gql } from '@apollo/client';

export const GET_SHOP = gql`
  query Shop($filter: ShopInput) {
    shop(filter: $filter) {
      name
    }
  }
`;
