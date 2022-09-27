import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { User } from './components/User';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<User />);