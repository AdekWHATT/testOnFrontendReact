import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import Menu from './components/Menu'


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    {/* <Header /> */}
    
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
