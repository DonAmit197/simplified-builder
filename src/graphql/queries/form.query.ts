import {gql} from '@apollo/client';
import {FORM_SUMMARY_FIELDS} from 'src/graphql/fragments/form.fragment.ts';

export const GET_FORMS = gql`
  ${FORM_SUMMARY_FIELDS}
  query GetForms($query: FormsQueryInput!) {
    forms(query: $query) {
      ...Form_Summary_Fields
    }
  }
`;
