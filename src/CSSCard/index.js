import React from 'react'

import './csscard.css'


class CSSCard extends React.Component {
    constructor() {
        super()
    }

    handleClick = (message, event) => {
        event.preventDefault()
        const card = document.getElementById(this.props.number)
        card.classList.toggle('is-flipped')
        console.log(event)
        console.log(message)
        console.log(card)
    }

    render() {
        return(
            <div class="scene scene--card">
              <div class="card" 
                   id={this.props.number} 
                   onClick={(event) => { this.handleClick("hitting", event)}}
              >

                <div class="card__face card__face--front">front</div>
                <div class="card__face card__face--back">back</div>
              
              </div>
            </div>
        )
    }
}

export default CSSCard