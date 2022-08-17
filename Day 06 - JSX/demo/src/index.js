import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// create element 
const items = ["C++", "PHP", "JAVA"];
const programming = React.createElement("section", { id: "coding" },
  React.createElement("h1", null, "Programming Languages"),
  React.createElement("ul", { className: "coding" },
    items.map((coding, i) =>
      React.createElement("li", { key: i }, coding),
    )
  )
);

const myName = React.createElement("div", { className: "my-name", id: "my-name" },
  React.createElement("h1", null, "QuyenNV"),
  React.createElement("p", null, "Hello World")
);

// jsx
const myNameJSX = (
  <div className="my-name" id='my-name'>
    <h1>QuyenNV</h1>
    <p>Hello World</p>
  </div>
)


// fruits - Learn demo

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

const fruitElement = (
  <div className='container'>
    <h1>List of fruits</h1>
    <ul>
      {
        fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
      }
    </ul>
  </div>
);

// time - learn demo

const container = document.getElementById('root');
const root = createRoot(container);
const tick = () => {
  const now = new Date();
  root.render(
    <div className='container'>
      <h1>Hello, world!</h1>
      <p>It is {now.toLocaleTimeString()}</p>
    </div>
  );
}
setInterval(tick, 1000)
