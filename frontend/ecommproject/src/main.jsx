import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux'
import { store } from './store/authStore.js'

// Get the root element
const rootElement = document.getElementById('root')

// Create a root
const root = createRoot(rootElement)

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
