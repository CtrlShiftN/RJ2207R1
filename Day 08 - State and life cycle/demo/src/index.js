import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import StateIntro from './components/StateIntro';
import CountButton from './components/CountButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionLink from './components/ActionLink';
import LifeCycleDemo from './components/LifeCycleDemo';
import ConditionalRenderingDemo from './components/ConditionalRenderingDemo';
import DidMountDemo from './components/DidMountDemo';
import WillUnmount from './components/WillUnmount';
import AuthenDemo from './components/AuthenDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AuthenDemo />);
