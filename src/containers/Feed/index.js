import React, { Component } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import { cloudinary } from 'cloudinary-core'

import Card from 'components/Card'
import MainLayout from 'components/MainLayout'

import 'components/Card/card.css'

const cloudName = 'dlwxbby8o'

class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images: ["test/planets.jpg", "test/hooverdam.jpg", 
                     "test/cubes.jpg", "test/europe.jpg", 
                     "test/miami.jpg"],
            hasLoaded: false 
        }
    }
    
    render(){
        const cards = this.state.images.map((ele, idx) => {
            return <Card index={idx} publicId={ele} />
        })

        return(
            <MainLayout>
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cards}
                       </section>
                    </section> 
            </MainLayout> 
        )
    }
}

export default Feed