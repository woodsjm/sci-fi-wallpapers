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

    downloadWallpaper = async (fileUrl) => {
        const attachmentUrl = await imageUtil('getAttachmentUrl', false, 'test/miami.jpg', 'mona_lisa')
        console.log(attachmentUrl)
        return attachmentUrl
    }

    handleOptionsSubmit = async (sourceArtwork) => {
        const response = await this.downloadWallpaper();
        if (response) this.closeModal()
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