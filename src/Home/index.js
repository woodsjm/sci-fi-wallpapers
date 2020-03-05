import React, { Component } from 'react'
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
                  <div class='section menu'>
                    <p>Nav</p>
                  </div>
                  <div class='section header'>
                    <h1>{this.state.message}</h1>
                  </div>
                  <div class='section content'>
                    <UploadForm/>
                  </div>
                  <div class='section sign-up'>
                    <p>2</p>
                  </div>
                  <div class='section feature-1'>
                    <p>3</p>
                  </div>
                  <div class='section feature-2'>
                    <p>4</p>
                  </div>
                  <div class='section feature-3'>
                    <p>5</p>
                  </div>
                </div>
            </div>
        )
    }
}

export default Home