import React, { Component } from 'react'

import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'


const Header = () => {
    return(
        <header className="header">
            <div className="nav-container">
                <div className="nav-item logo">
                    
                        <div style={{
                            backgroundImage: 'url(/assets/syfy_logo_small.svg)',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '2.8em', width: '2.2em',
                            alignSelf: 'center'
                        }}>
                        </div>
                    
                </div>
                <div className="nav-item heading">
                    <h3 >Feed</h3>  
                </div>
                <div className="nav-item menu">
                    <Icon icon={menu} size='1.4em' id="icon"  />
                </div>
            </div>
            
        </header>
    )
} 

export default Header

// backgroundImage: 'url(/assets/syfy_logo.png)'