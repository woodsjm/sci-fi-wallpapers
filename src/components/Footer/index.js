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
        <Icon icon={chevronsLeft} size={24} 
              className="footer-chevron" id="footer-icon" 
              onClick={props.changePage.bind(null, 'First')} 
        />
        <Icon icon={arrowLeft} size={24} 
              className="footer-arrow" id="footer-icon" 
              onClick={props.changePage.bind(null, '&larr')} 
        />

        <div className="footer-page-number">
          <h2>{props.feedPage}</h2>
        </div>

        <Icon icon={arrowRight} size={24} 
              className="footer-arrow" id="footer-icon" 
              onClick={props.changePage.bind(null, '&rarr')} 
        />
        <Icon icon={chevronsRight} size={24} 
              className="footer-chevron" id="footer-icon" 
              onClick={props.changePage.bind(null, 'Last')} 
        />
    </footer>
  )
} 

export default Footer