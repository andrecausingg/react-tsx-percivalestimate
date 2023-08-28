import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App'

import './assets/css/index.css'

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
}