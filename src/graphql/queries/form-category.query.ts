import {gql} from '@apollo/client';

export const GET_FORM_CATEGORIES = gql`
  query GetFormCategories {
    formCategories {
      id
      name
    }
  }
`;
