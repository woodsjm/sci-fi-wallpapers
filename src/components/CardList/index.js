import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import { Icon } from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/'
import { Button, Divider } from 'semantic-ui-react'

import './card.css'


const CardList = ({current, downloadWallpaper, images, imgAlbum, openModal}) => {
  let fetching = false
  // FIX: Refactor to remove filterChecked
  const download = async (publicId) => {
    fetching = true
    const downloadHref = await downloadWallpaper(0, imgAlbum, publicId)
    if (downloadHref) {
      window.location.href = downloadHref
      fetching = false
    }
  }

  const cards = images[current].map((ele, idx) => {
    // FIX: Remove unneeded variables now that cards don't flip
    const cardFace = false
    const checkBox = false
    return (
        <div className="scene" key={idx}>
        <div className={cardFace === false ? "card" : "card is-flipped"}>
          <div className="card__face card__face--front" 
               style={{
                backgroundImage: `url("${imgAlbum}/w_auto,c_scale/v1/${ele}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'}} 
          > 
          </div>
          <Divider fitted/>
          <section className="card-footer">
            <section className="card-footer-segment">
              <Button 
                size='mini'
                onClick={() => download(ele)} 
                id="card-footer-dl-button"
                className="card-footer-button" 
              >
                Download
              </Button>
            </section>
            <section className="card-footer-segment">
              <Button 
                size='mini' 
                onClick={openModal}
                id="card-footer-os-button"
                className="card-footer-button"  
              >
                Options
              </Button>
            </section>
          </section>
        </div>
      </div>
    )
  })

  return (
    <div>{cards}</div>
  )
}

export default CardList