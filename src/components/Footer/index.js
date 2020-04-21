import React, { Component, useState } from 'react'
import { Progress, Segment } from 'semantic-ui-react'

import {
  arrowLeft, 
  arrowRight, 
  chevronsLeft,
  chevronsRight, 
} from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'


const Footer = ({ changePage, downloading, downloadProgress, feedPage }) => { 
  return(
    <div>
    {downloading ?

        <footer className="footer">
          <Progress percent={downloadProgress} active className="footer-loader" size='small' color="yellow">
          </Progress>
          {downloading}
        </footer>

          :

        <footer className="footer">
            <Icon icon={chevronsLeft} size={24} 
                  className="footer-chevron" id="footer-icon" 
                  onClick={changePage.bind(null, 'First')} 
            />
            <Icon icon={arrowLeft} size={24} 
                  className="footer-arrow" id="footer-icon" 
                  onClick={changePage.bind(null, '&larr')} 
            />

            <div className="footer-page-number">
              <h2>{feedPage}</h2>
            </div>

            <Icon icon={arrowRight} size={24} 
                  className="footer-arrow" id="footer-icon" 
                  onClick={changePage.bind(null, '&rarr')} 
            />
            <Icon icon={chevronsRight} size={24} 
                  className="footer-chevron" id="footer-icon" 
                  onClick={changePage.bind(null, 'Last')} 
            />
        </footer>
    }
    </div>
  )
} 

export default Footer