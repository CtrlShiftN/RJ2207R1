import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LoginSuccess from './components/LoginSuccess';
import Counter from './components/Counter';
import Hello from './components/HelloFromInput';
import { EffectDemo } from './components/EffectDemo';
import Selector from './components/Selector';
import ClockDemo from './components/ClockDemo';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ClockDemo />);
