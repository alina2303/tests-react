import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestComponent from './components/testComponent';
import Blue2Chapter13 from './components/b2Chapter13';
import Red2Chapter11 from './components/r2Chapter11';
import Red1Chapter9 from './components/r1Chapter9';
import Blue1Chapter10 from './components/b1Chapter10';
import Blue2Chapter9 from './components/b2Chapter9';
import Blue2Chapter18 from './components/b2Chapter18';
import Green1Chapter12 from './components/g1Chapter12';
import Blue1Chapter12 from './components/b1Chapter12';

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

 const test9red = document.getElementById('test9r');
    if (test9red) {
        ReactDOM.render(<Red1Chapter9 />, test9red)
    }

const test10blue1 = document.getElementById('test10b');
if (test10blue1) {
    ReactDOM.render(<Blue1Chapter10 />, test10blue1)
}
const test9blue2 = document.getElementById('test9b');
if (test9blue2) {
    ReactDOM.render(<Blue2Chapter9 />, test9blue2)
}
const test18blue2 = document.getElementById('test18b');
if (test18blue2) {
    ReactDOM.render(<Blue2Chapter18 />, test18blue2)
}
const test12green1 = document.getElementById('test12g');
if (test12green1) {
    ReactDOM.render(<Green1Chapter12 />, test12green1)
}
const test12blue1 = document.getElementById('test12b1');
if (test12blue1) {
    ReactDOM.render(<Blue1Chapter12 />, test12blue1)
}