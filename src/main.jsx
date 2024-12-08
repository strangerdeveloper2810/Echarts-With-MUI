import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppComponent from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
)
