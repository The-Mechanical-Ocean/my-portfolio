import './index.css';
import React from 'react';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();