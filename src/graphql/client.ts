import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import create from 'zustand';

type ErrorType = {
  hasError: boolean;
  error: any;
  date: number | undefined;
};

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));

const httpLink = createUploadLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      console.log('graphQLError: ', graphQLError);

      useErrorsStore.setState({
        hasError: true,
        error: graphQLError,
        date: Date.now(),
      });
    }
  } else if (networkError) {
    console.log('networkError: ', networkError);

    useErrorsStore.setState({
      hasError: true,
      error: networkError,
      date: Date.now(),
    });
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
