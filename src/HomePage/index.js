import React, { Component } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import { cloudinary } from 'cloudinary-core'

import Card from '../Card'
import Layout from '../Layout'

import '../Card/card.css'


class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images: ["test/planets.png", "screenshot.jpg", "rusoeboiq1tla7voerxv.jpg"],
            hasLoaded: false 
        }
    }
    
    render(){
        const cards = this.state.images.map((ele, idx) => {
            return <Card index={idx} publicId={ele} />
        })

        return(
            <Layout>
                <CloudinaryContext cloudName="dlwxbby8o">
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cards}
                       </section>
                    </section>
                </CloudinaryContext> 
            </Layout> 
        )
    }
}

export default HomePage