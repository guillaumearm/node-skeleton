import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

if (process.env.NODE_ENV !== 'production') {
  console.info(`mode '${process.env.NODE_ENV}' enabled.`);
}

const app = document.getElementById('app');

if (!app) {
  throw new Error('app root div not found');
}

const root = createRoot(app);

root.render(<App />);
