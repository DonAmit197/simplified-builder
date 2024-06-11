/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Form = {
  __typename?: 'Form';
  content: Scalars['String']['output'];
  formSettings: FormSettings;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type FormSettings = {
  __typename?: 'FormSettings';
  dataEmailAddresses: Scalars['String']['output'];
  form: Form;
  formId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: ValidationResult;
};


export type MutationCreateUserArgs = {
  input: UserCommandInput;
};

export type Query = {
  __typename?: 'Query';
  forms: Array<Form>;
};

export type User = {
  __typename?: 'User';
  emailAddress: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type UserCommandInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ValidationResult = {
  __typename?: 'ValidationResult';
  errorMessage?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Form_FieldsFragment = { __typename?: 'Form', id: number, userId: number, content: string, isDeleted: boolean, isActive: boolean, url: string, formSettings: { __typename?: 'FormSettings', id: number, title: string, dataEmailAddresses: string }, user: { __typename?: 'User', emailAddress: string } } & { ' $fragmentName'?: 'Form_FieldsFragment' };

export type Validation_FieldsFragment = { __typename?: 'ValidationResult', success: boolean, errorMessage?: string | null } & { ' $fragmentName'?: 'Validation_FieldsFragment' };

export type CreateUserMutationVariables = Exact<{
  input: UserCommandInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: (
    { __typename?: 'ValidationResult' }
    & { ' $fragmentRefs'?: { 'Validation_FieldsFragment': Validation_FieldsFragment } }
  ) };

export type GetFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormsQuery = { __typename?: 'Query', forms: Array<(
    { __typename?: 'Form' }
    & { ' $fragmentRefs'?: { 'Form_FieldsFragment': Form_FieldsFragment } }
  )> };

export const Form_FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Form_Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dataEmailAddresses"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<Form_FieldsFragment, unknown>;
export const Validation_FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Validation_Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}}]}}]} as unknown as DocumentNode<Validation_FieldsFragment, unknown>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Validation_Fields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Validation_Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetFormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Form_Fields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Form_Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dataEmailAddresses"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<GetFormsQuery, GetFormsQueryVariables>;