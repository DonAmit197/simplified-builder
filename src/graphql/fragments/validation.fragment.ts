import {gql} from '@apollo/client';

export const VALIDATION_FIELDS = gql`
  fragment Validation_Fields on ValidationResult {
    success
    errorMessage
  }
`;
