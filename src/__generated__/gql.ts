/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment Form_Summary_Fields on Form {\n    id\n    isActive\n    updatedAt\n    updatedLocal\n    userId\n    formSettings {\n      title\n      formCategory {\n        name\n      }\n    }\n  }\n": types.Form_Summary_FieldsFragmentDoc,
    "\n  fragment Validation_Fields on ValidationResult {\n    success\n    errorMessage\n  }\n": types.Validation_FieldsFragmentDoc,
    "\n  \n  mutation CreateUser($input: UserCommandInput!) {\n    createUser(input: $input) {\n      ...Validation_Fields\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetFormCategories {\n    formCategories {\n      id\n      name\n    }\n  }\n": types.GetFormCategoriesDocument,
    "\n  query GetFormCategoryCount {\n    formCategoryCounts {\n      formCategory {\n        id\n        name\n      }\n      formCount\n    }\n  }\n": types.GetFormCategoryCountDocument,
    "\n  \n  query GetForms($query: FormsQueryInput!) {\n    forms(query: $query) {\n      ...Form_Summary_Fields\n    }\n  }\n": types.GetFormsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Form_Summary_Fields on Form {\n    id\n    isActive\n    updatedAt\n    updatedLocal\n    userId\n    formSettings {\n      title\n      formCategory {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Form_Summary_Fields on Form {\n    id\n    isActive\n    updatedAt\n    updatedLocal\n    userId\n    formSettings {\n      title\n      formCategory {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Validation_Fields on ValidationResult {\n    success\n    errorMessage\n  }\n"): (typeof documents)["\n  fragment Validation_Fields on ValidationResult {\n    success\n    errorMessage\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  mutation CreateUser($input: UserCommandInput!) {\n    createUser(input: $input) {\n      ...Validation_Fields\n    }\n  }\n"): (typeof documents)["\n  \n  mutation CreateUser($input: UserCommandInput!) {\n    createUser(input: $input) {\n      ...Validation_Fields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFormCategories {\n    formCategories {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetFormCategories {\n    formCategories {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFormCategoryCount {\n    formCategoryCounts {\n      formCategory {\n        id\n        name\n      }\n      formCount\n    }\n  }\n"): (typeof documents)["\n  query GetFormCategoryCount {\n    formCategoryCounts {\n      formCategory {\n        id\n        name\n      }\n      formCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query GetForms($query: FormsQueryInput!) {\n    forms(query: $query) {\n      ...Form_Summary_Fields\n    }\n  }\n"): (typeof documents)["\n  \n  query GetForms($query: FormsQueryInput!) {\n    forms(query: $query) {\n      ...Form_Summary_Fields\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;