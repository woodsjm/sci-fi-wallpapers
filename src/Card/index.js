import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

const cardContainerStyle = {
    margin: '2% 2%',
    padding: '1px',
    width: '100%',
    height: '300px',
    display: 'table',
    fontFamily: '"Karla", sans-serif'
}



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
            
                <ReactCardFlip containerStyle={cardContainerStyle} isFlipped={this.state.isFlipped} flipDirection='horizontal'>
                    <div className={this.props.front}>  
                        <button onClick={this.handleClick}>FLIP</button>
                    </div>

                    <div className={this.props.back}>
                        <button onClick={this.handleClick}>FLIP</button>
                    </div>
                </ReactCardFlip>
            
        )
    }
}

export default Card