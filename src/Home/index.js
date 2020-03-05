import React, { Component } from 'react'
import Card from '../Card'
import UploadForm from '../UploadForm'


class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            message: 'Homepage'
        }
    }
    
    render(){
        return(
            <div >
                <div class='page'>
                  <div class='top-section menu'>
                    <p>Nav</p>
                  </div>
                  
                  <Card which='Header' front='front header' back='back' />
                  
                  <div class='section content'>
                    <UploadForm/>
                  </div>

                  <Card which={3} front='front sign-up' back='back'/>
                  <Card which={4} front='front feature-1' back='back'/>
                  <Card which={5} front='front feature-2' back='back'/>
                  <Card which={6} front='front feature-3' back='back'/>                 
                </div>
            </div>
        )
    }
}

export default Home