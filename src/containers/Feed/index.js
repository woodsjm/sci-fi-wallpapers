import React, { Component } from 'react'
//import { cloudinary } from 'cloudinary-core'
import { 
  CloudinaryContext, 
  Image, 
  Transformation 
} from 'cloudinary-react'

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
            devH: this.props.devH,
            devW: this.props.devW 
        }
    }

    componentDidMount = async () => {
        const isTest = true
        const getImagesRes = await imageUtil('getImages', isTest)
        const imageUrls = await getImagesRes
        if (imageUrls) {
            this.setState({
                images: imageUrls, 
                last: imageUrls.length - 1, 
            })
        } else {
            console.log("No imageUrls")
        }
    }

    downloadWallpaper = async (blueFilter, album, cloudId) => {
        const { devH, devW } = this.state
        const imgName = cloudId.substring(cloudId.lastIndexOf('/') + 1)
        const imgOptions = `c_fill,e_blue:${blueFilter},fl_attachment:${imgName},h_${devH},q_${85},w_${devW}`
        const fileUrl = `${album}/${imgOptions}/v1584398809/${cloudId}`
        
        try {
          const downloadImageResponse = await fetch(fileUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'image/jpeg',
              'Content-Disposition': 'attachment',
            }
          })

          const parsedResponse = await downloadImageResponse
          if (parsedResponse.status === 200) {
            return parsedResponse.url
          } 
          
        } catch(err) {
          console.log(err)
        }
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

    render() {
        let cards;
        const { devH, devW, imgAlbum } = this.props
        const { current, images } = this.state
        if (images !== undefined) {
            cards = images[current].map((ele, idx) => {
                return <Card downloadWallpaper={this.downloadWallpaper} key={ele.toString()} 
                             index={idx} publicId={ele} imgAlbum={imgAlbum} 
                             devH={devH} devW={devW}
                        />
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