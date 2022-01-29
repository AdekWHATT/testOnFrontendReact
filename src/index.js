import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
