import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
  ApolloClient, 
  ApolloProvider, 
  HttpLink,
  InMemoryCache 
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://swapi.dev/api/"
  }),
  cache: new InMemoryCache(),

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

