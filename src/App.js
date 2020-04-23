import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import cloudinary from 'cloudinary-core'

import About from 'components/InfoPages/About'
import FAQ from 'components/InfoPages/FAQ'
import Feed from 'containers/Feed'
import TestContainer from 'containers/TestContainer'

import './App.css';


function App({ cloudSettings }) {
    const { cloud_name } = {...cloudSettings}
    const cloudinaryAlbum = `https://res.cloudinary.com/${cloud_name}/image/upload`
    const devPR = window.devicePixelRatio
    const devW = window.screen.width * devPR 
    const devH = window.screen.height * devPR
    return (
        <div >
          <Switch>
            <Route exact path='/' render={(props) => <Feed  {...props} devW={devW} devH={devH}imgAlbum={cloudinaryAlbum} cloudName={cloud_name}/>}/>
            <Route exact path='/about' render={(props) => <About {...props}/>} />
            <Route exact path='/faq' render={(props) => <FAQ {...props}/>} />
            <Route exact path='/testcontainer' render={(props) => <TestContainer  {...props} />}/>
          </Switch>
        </div>
    )
}

export default App