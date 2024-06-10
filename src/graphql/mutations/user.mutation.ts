import {gql} from '@apollo/client';
import {VALIDATION_FIELDS} from 'src/graphql/fragments/validation.fragment.ts';

export const SUBMIT_TRF = gql`
  ${VALIDATION_FIELDS}
  mutation CreateUser($input: UserCommandInput!) {
    createUser(input: $input) {
      ...Validation_Fields
    }
  }
`;
