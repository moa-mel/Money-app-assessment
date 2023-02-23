import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {ApolloProvider} from "@apollo/client"
import {apolloClient} from  "./graphql"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
