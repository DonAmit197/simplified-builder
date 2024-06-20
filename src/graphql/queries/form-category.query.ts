import {gql} from '@apollo/client';

export const GET_FORM_CATEGORIES = gql`
  query GetFormCategories {
    formCategories {
      id
      name
    }
  }
`;

export const GET_FORM_CATEGORY_COUNTS = gql`
  query GetFormCategoryCount {
    formCategoryCounts {
      formCategory {
        id
        name
      }
      formCount
    }
  }
`;
