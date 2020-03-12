import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <App/> 
    </BrowserRouter>,
    document.getElementById('root'));

// Service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
