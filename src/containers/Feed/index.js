import React, { Component } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import { cloudinary } from 'cloudinary-core'

import Card from 'components/Card'
import MainLayout from 'components/MainLayout'

import 'components/Card/card.css'


class Feed extends React.Component {
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
            <MainLayout>
                <CloudinaryContext cloudName="dlwxbby8o">
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cards}
                       </section>
                    </section>
                </CloudinaryContext> 
            </MainLayout> 
        )
    }
}

export default Feed