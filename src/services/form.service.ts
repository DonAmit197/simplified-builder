import {useApolloClient} from '@apollo/client';
import {Form, FormCategory, FormCategoryCount} from 'src/__generated__/graphql.ts';
import {GET_FORM_CATEGORIES, GET_FORM_CATEGORY_COUNTS} from 'src/graphql/queries/form-category.query.ts';
import {GET_FORMS} from 'src/graphql/queries/form.query.ts';

export class FormService {
  client;

  constructor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    this.client = useApolloClient();
  }

  async getForms(categoryId: number): Promise<Form[]> {
    if (this.client) {
      const result = await this.client.query({
        query: GET_FORMS,
        variables: {query: {categoryId}},
        fetchPolicy: 'no-cache',
      });
      return result.data.forms ?? [];
    }
    return Promise.resolve([]);
  }

  async getFormCategories(): Promise<FormCategory[]> {
    if (this.client) {
      const result = await this.client.query({
        query: GET_FORM_CATEGORIES,
        fetchPolicy: 'no-cache',
      });
      return result.data.formCategories ?? [];
    }
    return Promise.resolve([]);
  }

  async getFormCategoryCounts(): Promise<FormCategoryCount[]> {
    if (this.client) {
      const result = await this.client.query({
        query: GET_FORM_CATEGORY_COUNTS,
        fetchPolicy: 'no-cache',
      });
      return result.data.formCategoryCounts ?? [];
    }
    return Promise.resolve([]);
  }
}
