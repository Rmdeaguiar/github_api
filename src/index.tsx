import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.scss';
import MainRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
