// src/index.js
import React from 'react';
import App from './App';
import { AppProvider } from './context/AppContext';
import './styles.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
