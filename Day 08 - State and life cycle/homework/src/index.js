import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import AuthenDemo from './components/AuthenDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AuthenDemo />);