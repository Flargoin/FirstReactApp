/* Импортируем компоненты реакта */
import React from 'react';
import ReactDOM from 'react-dom';

/* Импортируем приложение */
import App from './components/app/app';

/* Импортируем базовые стили */
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
