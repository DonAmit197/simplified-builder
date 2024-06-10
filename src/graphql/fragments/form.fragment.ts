import {gql} from '@apollo/client';

export const FORM_FIELDS = gql`
  fragment Form_Fields on Form {
    id
    userId
    content
    isDeleted
    isActive
    url
    formSettings {
      id
      title
      dataEmailAddresses
    }
    user {
      emailAddress
    }
  }
`;
