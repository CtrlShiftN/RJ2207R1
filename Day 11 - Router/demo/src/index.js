import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Index } from './components/basic-demo/Index';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);