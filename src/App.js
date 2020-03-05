import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div >
      <Switch >
        <Route exact path='/' render={(props) => <Home {...props}/> } />
      </Switch>
    </div>
  );
}

export default App;
