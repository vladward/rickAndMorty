import create from 'zustand';
import {API_HOST} from "../constants";
import {onError} from "@apollo/client/link/error";
import {ApolloClient, ApolloLink, InMemoryCache, split} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
import {getMainDefinition} from "@apollo/client/utilities";

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
    uri: API_HOST,
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
        );
    },
    httpLink,
);

const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
        for (const graphQLError of graphQLErrors) {
            console.log('graphQLError: ', graphQLError);

            if (graphQLError.message === 'Context creation failed: INVALID_TOKEN') {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
            }

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
    link: ApolloLink.from([errorLink, splitLink]),
    cache: new InMemoryCache()
});