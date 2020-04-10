import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import cloudinarySettings from 'config/cloudinarySettings.js'

import './index.css';


const { cloud_name } = cloudinarySettings

ReactDOM.render(
    <BrowserRouter>
        <CloudinaryContext cloudName={cloud_name}>
            <App cloudSettings={cloudinarySettings}/> 
        </CloudinaryContext>
    </BrowserRouter>,
    document.getElementById('root'));

// Service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();