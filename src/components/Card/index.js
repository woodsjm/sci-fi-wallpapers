import React, { useState } from 'react'
import { Image } from 'cloudinary-react'

import './card.css'


const Card = (props) => {
  const [cardFace, changeCardFace] = useState(false)
  return(
      <div className="scene">
        <div className={cardFace === false ? "card" : "card is-flipped"} 
             onClick={() => changeCardFace(!cardFace)}
             key={props.index} 
        >
            <div className="card__face card__face--front" 
                 style={{backgroundImage: `url("https://res.cloudinary.com/dlwxbby8o/image/upload/v1/${props.publicId}")`,
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: '100% 100%'}} >
              
            </div>
            <div className="card__face card__face--back">back</div>
            
        </div>
      </div>
    )
}

export default Card