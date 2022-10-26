import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { WelcomeFunc } from './components/WelcomeFunc';
import WelcomeClass from './components/WelcomeClass';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from './components/Alert';
import { StudentList } from './components/StudentList';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StudentList />);
