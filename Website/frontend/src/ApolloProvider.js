// src/ApolloProvider.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://test.api.shop.strackit.com/graphql", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

const ApolloProviderComponent = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloProviderComponent;
