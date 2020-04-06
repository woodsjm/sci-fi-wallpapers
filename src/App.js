import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import cloudinary from 'cloudinary-core'

import Feed from 'containers/Feed'
import TestContainer from 'containers/TestContainer'

import './App.css';


function App({ cloudSettings }) {
    const { cloud_name } = {...cloudSettings}
    const cloudinaryAlbum = `https://res.cloudinary.com/${cloud_name}/image/upload`
        
    return (
        <div >
          <Switch>
            <Route exact path='/' render={(props) => <Feed  {...props} imgAlbum={cloudinaryAlbum}/>}/>
            <Route exact path='/testcontainer' render={(props) => <TestContainer  {...props} />}/>
          </Switch>
        </div>
    )
}

export default App