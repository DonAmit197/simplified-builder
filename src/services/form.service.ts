import {useApolloClient} from '@apollo/client';
import {Form} from '../__generated__/graphql.ts';
import {GET_FORMS} from '../graphql/queries/form.query.ts';

export class FormService {
  client;

  constructor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    this.client = useApolloClient();
  }

  async getForms(): Promise<Form[]> {
    if (this.client) {
      const result = await this.client.query({
        query: GET_FORMS,
        fetchPolicy: 'no-cache',
      });
      return result.data.forms ?? [];
    }
    return Promise.resolve([]);
  }
}
