import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoApp } from './components/TodoApp';
import store from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
);