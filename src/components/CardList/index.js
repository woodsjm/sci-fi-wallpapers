import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import { Icon } from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/'

import './card.css'


const CardList = ({current, devH, devW, downloadWallpaper, handleModal, images, imgAlbum}) => {
  let fetching = false
  const download = async (filterChecked, publicId) => {
    fetching = true
    const downloadHref = await downloadWallpaper(filterChecked ? 70 : 0, imgAlbum, publicId)
    if (downloadHref) {
      window.location.href = downloadHref
      fetching = false
    }
  }

  const cards = images[current].map((ele, idx) => {
    const cardFace = false
    const checkBox = false
    return (
        <div className="scene" key={ele.toString()}>
        <div className={cardFace === false ? "card" : "card is-flipped"}>
          <div className="card__face card__face--front"
               onClick={handleModal} 
               style={{
                backgroundImage: `url("${imgAlbum}/w_auto,c_scale/v1/${ele}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'}} 
          > 
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>{cards}</div>
  )
}

export default CardList