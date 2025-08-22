import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './colors.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
