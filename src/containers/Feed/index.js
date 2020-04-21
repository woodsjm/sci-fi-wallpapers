import React, { Component } from 'react'
import cloudinary from 'cloudinary-core'
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'
import { Modal, Loader, Dimmer } from 'semantic-ui-react'

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
            targetWallpaper: null,
            downloading: false,
            downloadProgress: 0
        }
    }

    componentDidMount = async () => {
        const isTest = false
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

    downloadWallpaper = async (transformations) => {
        this.setState({ downloading: true})
        const progress = setInterval(() => this.incrementProgress(), 1500)

        const { devH, devW, targetWallpaper } = this.state
        const baseTransform = {
            crop: 'imagga_scale',
            effect: 'improve',
            flags: 'attachment',
            height: Math.floor(devH),
            quality: 100, 
            width: Math.floor(devW) 
        }
        const options = transformations ? [baseTransform, ...transformations] : [baseTransform]
        const cloudinaryRequestOptions = {source: targetWallpaper, options: options}
        const attachmentUrl = await imageUtil('getAttachmentUrl', false, cloudinaryRequestOptions)
        
        if (attachmentUrl) {
            window.location.href = attachmentUrl
            clearInterval(progress)
            this.setState({ downloadProgress: 100})
            setTimeout(() => this.setState({ downloading: false}), 1000)
            return true
        } else {
            clearInterval(progress)
            await this.setState({ loading: false})
            return false
        }
    }

    handleDirectDownload = async (id) => {
        const setTarget = await this.setState({ targetWallpaper: this.state.images[this.state.current][id]})
        this.downloadWallpaper()
    }

    closeModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    incrementProgress = () => {
        this.setState((prevState) => ({
          downloadProgress: prevState.downloadProgress > 60 ? 80 : prevState.downloadProgress + 20,
        }))
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
                        directlyDownload={this.handleDirectDownload}
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
                                downloadWallpaper={this.downloadWallpaper.bind(this)}
                                showModal={this.state.showModal} 
                                 
                            />
                       </section>
                    </section> 
                    <Footer 
                        changePage={this.handlePagination}         
                        feedPage={current + 1}
                        downloading={this.state.downloading}
                        downloadProgress={this.state.downloadProgress}
                    />
            </MainLayout> 
        )
    }
}

export default Feed