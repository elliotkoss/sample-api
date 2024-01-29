import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

//Development-only. Axios helpers
import axios from 'axios';
window.axios = axios;

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <App />      
);
