import React, { Component } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import { cloudinary } from 'cloudinary-core'

import Card from 'components/Card'
import Footer from 'components/Footer'
import MainLayout from 'components/MainLayout'

import 'components/Card/card.css'


class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            0: ["test/planets.jpg", "test/hooverdam.jpg", 
                     "test/cubes.jpg"],
            1: ["test/europe.jpg", "test/miami.jpg"],
            hasLoaded: false,
            current: 0,
            last: 1, 
        }
    }

    handlePagination = (which) => {
        let newPage;
        const { current, last } = this.state

        if (which === 'First' || which === 'Last') {
            newPage = which === 'First' ? 0 : last
        } else {
            let change;
            change = which === '&rarr' ? 1 : -1
            newPage = current + change
        }
        
        if (this.state[newPage] !== undefined) {
            this.setState(state => { 
                return {current: newPage}
            })
        }
    }

    render(){
        const { current } = this.state

        const cards = this.state[current].map((ele, idx) => {
            return <Card index={idx} publicId={ele} />
        })

        return(
            <MainLayout>
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cards}
                       </section>
                    </section> 
                    <Footer changePage={this.handlePagination} 
                            feedPage={current + 1}/>
            </MainLayout> 
        )
    }
}

export default Feed