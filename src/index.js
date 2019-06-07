import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Parent from './App';
// import AppC2 from './App';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Parent />, document.getElementById('root'));
//let element = <AppC2 name= {["Kim Namjoon", "Kim Seokjin"]}/>;
let element = <App />
ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
