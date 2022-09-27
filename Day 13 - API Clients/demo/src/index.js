import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Post } from './components/Post';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Post />);
