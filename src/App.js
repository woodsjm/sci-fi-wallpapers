import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'

import Feed from 'containers/Feed'
import TestContainer from 'containers/TestContainer'

import './App.css';


function App() {
    return (
        <div >
          <Switch>
            <Route exact path='/' render={(props) => <Feed  {...props}/>}/>
            <Route exact path='/testcontainer' render={(props) => <TestContainer  {...props}/>}/>
          </Switch>
        </div>
    )
}

export default App