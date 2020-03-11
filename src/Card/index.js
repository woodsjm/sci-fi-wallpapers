import React, { useState } from 'react'

import './card.css'

const Card = (props) => {
  const [cardFace, changeCardFace] = useState(false)
  return(
      <div className="scene scene--card">
        <div className={cardFace === false ? "card" : "card is-flipped"} 
             key={props.index}  
             onClick={() => changeCardFace(!cardFace)}>
            <div className="card__face card__face--front">front</div>
            <div className="card__face card__face--back">back</div> 
        </div>
      </div>
    )
}

export default Card