import React, { Component } from 'react'

import Layout from '../Layout'
import Home from './home.js'


class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Homepage'
        }
    }
    
    render(){
        
        return(
            
            <Layout >
                <Home/>
            </Layout>
            
                
            
        )
    }
}

export default HomePage


// <div class='page'>
//                   <div class='top-section menu'>
//                     <p>Nav</p>
//                   </div>
                  
//                   <Card which='Header' front='front header' back='back' />
                  
//                   <div class='section content'>
//                     <UploadForm/>
//                   </div>

//                   <Card which={3} front='front sign-up' back='back'/>
//                   <Card which={4} front='front feature-1' back='back'/>
//                   <Card which={5} front='front feature-2' back='back'/>
//                   <Card which={6} front='front feature-3' back='back'/>                 
//                 </div>