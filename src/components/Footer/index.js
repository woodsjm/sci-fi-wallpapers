import React, { Component } from 'react'

import {
  arrowLeft, 
  arrowRight, 
  chevronsLeft,
  chevronsRight, 
} from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'


const Footer = (props) => {
    return(
        <footer className="footer">
            <Icon icon={chevronsLeft} size={24} id="icon" 
                  onClick={props.changePage.bind(null, 'First')} 
            />
            <Icon icon={arrowLeft} size={24} id="icon" 
                  onClick={props.changePage.bind(null, '&larr')} 
            />

            <h2>{props.feedPage}</h2>

            <Icon icon={arrowRight} size={24} id="icon" 
                  onClick={props.changePage.bind(null, '&rarr')} 
            />
            <Icon icon={chevronsRight} size={24} id="icon" 
                  onClick={props.changePage.bind(null, 'Last')} 
            />
        </footer>
    )
} 

export default Footer