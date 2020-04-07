import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import { Icon } from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/'

import './card.css'


const Card = ({devH, devW, downloadWallpaper, imgAlbum, index, publicId}) => {
  let fetching = false
  const [cardFace, changeCardFace] = useState(false)
  const [checkBox, changeCheckBox] = useState(false)

  const download = async () => {
    fetching = true
    const downloadHref = await downloadWallpaper(checkBox ? 70 : 0, imgAlbum, publicId)
    if (downloadHref) {
      window.location.href = downloadHref
      fetching = false
    }
  }

  return(
    <div className="scene">
      <div className={cardFace === false ? "card" : "card is-flipped"} 
           key={index} 
      >

        <div className="card__face card__face--front"
             onClick={() => changeCardFace(!cardFace)} 
             style={{
              backgroundImage: `url("${imgAlbum}/w_auto,c_scale/v1/${publicId}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%'}} 
        > 
        </div>
          <div className="card__face card__face--back">
            <div className="download-options">
              <label className="checkbox-container">Ozark this wallpaper?<div style={{display: 'inline', borderLeft: '0.2em dashed rgb(30, 33, 35)'}}/>
                <input 
                  type="checkbox"  className='checkbox' 
                  onClick={() => changeCheckBox(!checkBox)}
                />
              </label>
            </div>
            
            <div className="back-content">
              <button className="back-content-button" disabled = { fetching }
                 onClick={() => download()}
              >
              DOWNLOAD
              </button>
              <button className="back-content-button" onClick={() => changeCardFace(!cardFace)}>
                FLIP
              </button>
          </div>
          </div> 
      </div>
    </div>
  )
}

export default Card