import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
require ('./script.js');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter>
      <Routes>
        <Route path="/my-page/*" element={ <App /> }>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
