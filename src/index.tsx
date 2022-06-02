import './index.css';
import './fonts/get_schwifty.ttf';

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { client } from './graphql/client';
import { Navigation } from './navigation/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </ApolloProvider>,
);
