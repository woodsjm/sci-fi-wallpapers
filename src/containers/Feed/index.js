import React, { Component } from 'react'
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'
import { Modal } from 'semantic-ui-react'

import CardList from 'components/CardList'
import DownloadModal from 'components/DownloadModal'
import Footer from 'components/Footer'
import { imageUtil } from 'utils/imageUtil.js'
import MainLayout from 'components/MainLayout'
import Menu from 'components/Menu'

import 'components/CardList/card.css'


class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // FIX: Refactor current to currentPage
            current: 0,
            devH: this.props.devH,
            devW: this.props.devW,
            showModal: false
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

    handleModal = () => {
        console.log("hitting modal")
        this.setState({showModal: !this.state.showModal})
    }

    // FIX: Refactor which
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
        let cardList;
        const { devH, devW, imgAlbum } = this.props
        const { current, images } = this.state
        if (images !== undefined) {
            cardList = <CardList 
                        current={current} devH={devH} devW={devW} 
                        downloadWallpaper={this.downloadWallpaper}
                        handleModal={this.handleModal.bind(this)} 
                        images={images} imgAlbum={imgAlbum} 
                        />  
        }
        
        return(
            <MainLayout>
                    <section className="content-flex-box">
                       <section className="content-feed">
                            {cardList}
                            <DownloadModal
                                className="download-modal"
                                showModal={this.state.showModal} 
                                handleModal={this.handleModal.bind(this)}  
                            />
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