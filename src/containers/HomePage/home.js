import React, { Component } from 'react'

import CSSCard from '../CSSCard'
import Card from '../Card'
import UploadForm from '../UploadForm'


class Home extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <section style={{height: '1000px'}}>

                <CSSCard number={1}/>
                <CSSCard number={2}/>
                <CSSCard number={3}/>
                <CSSCard number={4}/>

            </section>
        )
    }
}

export default Home