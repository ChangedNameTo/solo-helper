import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { enableMapSet } from 'immer';

enableMapSet(); // Call this to enable the MapSet plugin

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
