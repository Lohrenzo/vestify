import React from 'react'
import ReactDOM from 'react-dom/client'
// import Index from './Index.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Index /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
