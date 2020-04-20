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
            showModal: false,
            targetWallpaper: null
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

    downloadWallpaper = async (optImg1) => {
        const { devH, devW, targetWallpaper } = this.state
        console.log(devH)
        const attachmentUrl = await imageUtil('getAttachmentUrl', false, targetWallpaper, optImg1, Math.floor(devH), Math.floor(devW))
        console.log(attachmentUrl)
        window.location.href = attachmentUrl
        return attachmentUrl
    }

    handleOptionsSubmit = async (transformations) => {
        const { devH, devW, targetWallpaper } = this.state
        const baseTransform = {
            crop: 'imagga_scale',
            effect: 'improve',
            flags: 'attachment',
            height: Math.floor(devH),
            quality: 100, 
            width: Math.floor(devW) 
        }
        const cloudinaryRequestOptions = {source: targetWallpaper, options: [baseTransform, ...transformations]}
        const attachmentUrl = await imageUtil('getAttachmentUrl', false, cloudinaryRequestOptions)
        window.location.href = attachmentUrl
        this.closeModal()
    }

    closeModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    openModal = (id) => {
        this.setState({  
            showModal: !this.state.showModal,
            targetWallpaper: this.state.images[this.state.current][id]
        })
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
                        openModal={this.openModal} 
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