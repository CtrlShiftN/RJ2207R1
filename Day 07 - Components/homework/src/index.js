import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import AddClass from './components/AddClass';
import AddFunction from './components/AddFunction';
import WelcomeFunc from './components/WelcomeFunc';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentInfo from './components/StudentInfo';
import BMICalculator from './components/BMICalculator';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BMICalculator />);
