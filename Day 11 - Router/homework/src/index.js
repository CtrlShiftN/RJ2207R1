import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routing } from './components/core-login/Routing';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Routing />);