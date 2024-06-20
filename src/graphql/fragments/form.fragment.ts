import {gql} from '@apollo/client';

export const FORM_SUMMARY_FIELDS = gql`
  fragment Form_Summary_Fields on Form {
    id
    isActive
    updatedAt
    updatedLocal
    userId
    formSettings {
      title
      formCategory {
        name
      }
    }
  }
`;
