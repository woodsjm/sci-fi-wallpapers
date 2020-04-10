import React, { Component, useState } from 'react'

import { Icon } from 'react-icons-kit'
import { menu, x } from 'react-icons-kit/feather/'
import Menu from 'components/Menu'

import './header.css'


const Header = () => {
    let hamburger = menu, collapsed = x
    const [showMenu, setMenu] = useState(false) 
    return(
        <header className="header">
            <div className="nav-container">
                <div className="nav-item logo" >
                    <div style={{
                        backgroundImage: 'url(/assets/syfy_logo_small.svg)',
                        height: '2.8em', width: '2.2em',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        alignSelf: 'center'}}
                    >
                    </div>
                </div>
                <div className="nav-item heading">
                    <h3 >Feed</h3>  
                </div>
                <div className="nav-item menu" 
                     onClick={() => setMenu(!showMenu)}
                >
                    <Icon 
                        size='1.4em' id="icon"
                        icon={showMenu ? collapsed : hamburger}  
                    />
                <Menu visibility={showMenu}/>
                </div>
            </div>
        </header>
    )
} 

export default Header