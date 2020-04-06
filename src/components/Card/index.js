import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import './card.css'


const Card = ({imgAlbum, index, publicId}) => {
  let fetching = false
  const [cardFace, changeCardFace] = useState(false)

  const downloadImage = async () => {
    fetching = true
    const fileName = publicId.substring(publicId.lastIndexOf('/') + 1)
    const fileUrl = `${imgAlbum}/fl_attachment:${fileName}/v1584398809/${publicId}`

    try {
      const downloadImageResponse = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/jpeg',
          'Content-Disposition': 'attachment',
        }
      })

      const parsedResponse = await downloadImageResponse
      window.location.href = await parsedResponse.url
      const responseBody = await parsedResponse.body
      fetching = false
    } catch(err) {
      console.log(err)
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
               onClick={() => downloadImage()}
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