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
        <section style={{height: '1000px'}}>
                
                <Card />
                <Card />
                <Card />
                <Card />
        </section>
        )
    }
}

export default Home

// style={{border: '2px solid green', alignItems: 'center', margin: '1%', minHeight: '125px'}}

