import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Headline from './components/Headline';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import HeadlineClass from './components/HeadlineClass';


const container = document.getElementById('root');
const root = createRoot(container);
// root.render(
//   <div className="container pt-3">
//     <Button onClick={() => console.log("Test clicked")} className="btn btn-primary" label="Button 1" />
//     <Button className="btn btn-warning" label="Button 2" />
//   </div>
// );

root.render(<HeadlineClass title="Test title" />);