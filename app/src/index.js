import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
