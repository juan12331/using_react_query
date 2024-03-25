import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const clientQuery = new QueryClient({});

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
