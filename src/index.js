import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhoneBook } from './components/App/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBook />
  </React.StrictMode>,
  document.getElementById('root')
);
