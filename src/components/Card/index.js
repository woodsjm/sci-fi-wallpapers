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
            <p className="back-header">Would you like to Ozark this wallpaper?</p>
            <div>
              <label class="toggle">
                <input 
                  type="checkbox"  className='checkbox' 
                  onClick={() => changeCheckBox(!checkBox)}
                />
                <span class="slider"></span>
              </label>
            </div>
            
            <div className="back-content">
              <button disabled = { fetching }
                 onClick={() => download()}
              >
              DOWNLOAD
              </button>
              <button onClick={() => changeCardFace(!cardFace)}>
                FLIP
              </button>
          </div>
          </div> 
      </div>
    </div>
  )
}

export default Card