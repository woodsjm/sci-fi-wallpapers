import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped}))
    }

    render() {
        return(
            <div className='invisible'>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
                    <div className={this.props.front}>  
                        <button onClick={this.handleClick}>FLIP</button>
                    </div>

                    <div className={this.props.back}>
                        <button onClick={this.handleClick}>FLIP</button>
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

export default Card