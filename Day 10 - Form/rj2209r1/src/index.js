import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { MyForm } from './components/MyDemoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyConditionalForm } from './components/ConditionalRender';
import { MyFormikDemo } from './components/FormikDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFormikDemo />);
