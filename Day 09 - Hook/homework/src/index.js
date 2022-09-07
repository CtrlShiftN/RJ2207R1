import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import CarGarage from './components/CarGarage';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CarGarage />);