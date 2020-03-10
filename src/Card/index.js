import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

const cardContainerStyle = {
    boxSizing: 'border-box', 
    padding: '4%',
    width: '100%',
    alignItems: 'center',
    minHeight: '125px',
    border: '2px solid green',
    // display: 'table',
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
                    <div style={{}}>  
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