import React, { Component } from 'react'


const Footer = (props) => {
    return(
        <footer className="footer">
            <h3 onClick={props.changePage.bind(null, 'First')}>FIRST</h3>
            <h3 onClick={props.changePage.bind(null, '&larr')}>&larr;</h3>
            <h2>{props.feedPage}</h2>
            <h3 onClick={props.changePage.bind(null, '&rarr')}>&rarr;</h3>
            <h3 onClick={props.changePage.bind(null, 'Last')}>LAST</h3>
        </footer>
    )
} 

export default Footer