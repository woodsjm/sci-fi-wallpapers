import React, { Component } from 'react'
import cloudinary from 'cloudinary-core'
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

    handleOptionsSubmit = () => {
        const cloudName = this.props.cloudName
        const cl = cloudinary.Cloudinary.new({cloud_name: cloudName});

        const imgUrl = cl.url('test/miami', 
            {transformation: 
                [
                    {
                        effect: "blue:50", 
                        width: 300, 
                        height: 300, 
                        crop: "crop"
                    }
                ]
            }
        )
        console.log(imgUrl)
        this.closeModal()
    }

    closeModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    openModal = () => {
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
        const imgAlbum = this.props.imgAlbum
        const current = this.state.current
        const images = this.state.images
        if (images !== undefined) {
            cardList = <CardList 
                        current={current} 
                        downloadWallpaper={this.downloadWallpaper}
                        openModal={this.openModal.bind(this)} 
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
                                closeModal={this.closeModal.bind(this)}
                                handleOptionsSubmit={this.handleOptionsSubmit.bind(this)}
                                showModal={this.state.showModal} 
                                 
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