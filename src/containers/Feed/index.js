import React, { Component } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import { cloudinary } from 'cloudinary-core'

import Card from 'components/Card'
import Footer from 'components/Footer'
import { imageUtil } from 'utils/imageUtil.js'
import MainLayout from 'components/MainLayout'

import 'components/Card/card.css'


class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // Page numbers for nested image array
            current: 0, 
        }
    }

    componentDidMount = async () => {
        const isTest = true
        const imageData = imageUtil('getImages', true)
        imageData.then((res) => {
            this.setState({
                images: res, 
                last: res.length - 1
            })
        }).catch((err) => {console.log(err)})
    }

    handlePagination = (which) => {
        let newPage;
        const {current, images, last} = this.state

        if (which === 'First' || which === 'Last') {
            newPage = which === 'First' ? 0 : last
        } else {
            let change;
            change = which === '&rarr' ? 1 : -1
            newPage = current + change
        }
        
        if (images[newPage] !== undefined) {
            this.setState(state => { 
                return { current: newPage }
            })
        }
    }

    render(){
        let cards;
        const { current, images } = this.state
        if (images !== undefined) {
            cards = images[current].map((ele, idx) => {
                console.log(ele)
                return <Card index={idx} publicId={ele} />
            })
        }

        return(
            <MainLayout>
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cards}
                       </section>
                    </section> 
                    <Footer 
                        changePage={this.handlePagination}         
                        feedPage={current + 1}
                    />
            </MainLayout> 
        )
    }
}

export default Feed