import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestComponent from './components/testComponent';
import Blue2Chapter13 from './components/b2Chapter13';
import Red2Chapter11 from './components/r2Chapter11';

const test11El = document.getElementById('test11');
    if (test11El) {
        ReactDOM.render(<TestComponent />, test11El);
    }

const test13blue = document.getElementById('test13');
    if (test13blue) {
        ReactDOM.render(<Blue2Chapter13 />, test13blue)
    }

const test11red = document.getElementById('test11r');
 if (test11red) {
     ReactDOM.render(<Red2Chapter11 />, test11red)
 }
