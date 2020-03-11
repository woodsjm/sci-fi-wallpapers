import React, { Component } from 'react'

import Card from '../Card'
import Home from './home.js'
import Layout from '../Layout'

import '../Card/card.css'


class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            wallpaperThumbnails: ['img1', 'img2', 'img3', 'img4']
        }
    }
    
    render(){
        const cards = this.state.wallpaperThumbnails.map((ele, idx) => {
            return <Card index={idx} image={ele} />
        })
        return(
            <Layout >
                <section className="content-flex-box">
                    <section className="content-feed">
                        {cards}
                    </section>
                </section>
            </Layout>  
        )
    }
}

export default HomePage