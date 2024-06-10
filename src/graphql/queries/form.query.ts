import {gql} from '@apollo/client';
import {FORM_FIELDS} from 'src/graphql/fragments/form.fragment.ts';

export const GET_FORMS = gql`
  ${FORM_FIELDS}
  query GetForms {
    forms {
      ...Form_Fields
    }
  }
`;
