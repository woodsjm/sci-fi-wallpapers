import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'

import HomePage from './containers/HomePage'
import TestPage from './TestPage'

import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={(props) => <HomePage {...props} />}/>
      </Switch>
    </div>
  )
}

export default App