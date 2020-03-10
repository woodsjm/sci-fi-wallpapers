import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import TestPage from './TestPage'

import './App.css';

function App() {
  return (

    <div >
      <Switch>
      
          <Route exact path='/' render={(props) => <TestPage {...props}/> }/>
        
          <Route exact path='/test' render={(props) => <HomePage {...props}/> }/>
        
      
      </Switch>
    </div>
  );
}

export default App;


// <Switch>
//         <Route exact path='/' render={(props) => <Home {...props}/> } />
//       </Switch>