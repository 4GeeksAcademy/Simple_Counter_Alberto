// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/index.css";
import SecondsCounter from './component/SecondsCounter';


let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('app'));

function updateCounter() {
    root.render(<SecondsCounter seconds={seconds} />);
    seconds++;
}

setInterval(updateCounter, 1000);

