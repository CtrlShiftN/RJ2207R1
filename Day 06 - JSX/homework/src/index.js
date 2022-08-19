import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import UserAgent from './components/UserAgent';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import ProfileCard from './components/ProfileCard';
import LoginForm from './components/LoginForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LoginForm />);