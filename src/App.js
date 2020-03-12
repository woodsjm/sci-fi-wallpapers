import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'

import Feed from 'containers/Feed'

import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={(props) => <Feed {...props} />}/>
      </Switch>
    </div>
  )
}

export default App