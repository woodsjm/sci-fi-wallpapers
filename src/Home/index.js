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
            <div>
                <h1>{this.state.message}</h1>
                <br/>
                <UploadForm/>
            </div>
        )
    }
}

export default Home