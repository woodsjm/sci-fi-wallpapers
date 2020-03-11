import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import TestPage from './TestPage'

import './App.css';


function App() {
  return (
    <div >
      <Switch>
          <Route exact path='/' render={(props) => <HomePage {...props}/> }/>
      </Switch>
    </div>
  )
}

export default App

// <Route exact path='/' render={(props) => <TestPage {...props}/> }/>