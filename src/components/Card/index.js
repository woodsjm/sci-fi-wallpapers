import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import './card.css'


const Card = ({downloadWallpaper, imgAlbum, index, publicId}) => {
  let fetching = false
  const [cardFace, changeCardFace] = useState(false)

  const download = async () => {
    fetching = true
    const downloadHref = await downloadWallpaper(imgAlbum, publicId)
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
  )
}

export default Card