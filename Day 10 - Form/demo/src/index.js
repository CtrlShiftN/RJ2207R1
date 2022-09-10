import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './components/BasicForm';
import Submit from './components/SubmitForm';
import FileUploadPage from './components/DemoInputFile';
import Form from './components/AgeValidateForm';
import ErrorForm from './components/ErrorMessageForm';
import { ValidationSchemaExample } from './components/ValidationSchemaDemo';
import { EmailYupForm } from './components/EmailYupForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EmailYupForm />);
