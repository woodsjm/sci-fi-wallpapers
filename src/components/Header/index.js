import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'react-icons-kit'
import { menu, x } from 'react-icons-kit/feather/'
import Menu from 'components/Menu'

import './header.css'


const Header = ({ title }) => {
    let hamburger = menu, collapsed = x
    const [showMenu, setMenu] = useState(false) 

    return(
        <header className="header">
            <Menu isVisible={showMenu}/>
            <div className="nav-container">
                <div className="nav-item logo">
                    <Link to='/'>
                    <div style={{
                        backgroundImage: 'url(/assets/syfy_logo_small.svg)',
                        height: '2.8em', width: '2.2em',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        alignSelf: 'center'}}
                    >
                    </div>
                    </Link>
                </div>
                <div className="nav-item heading">
                    <h3>{title}</h3>  
                </div>
                <div className="nav-item menu" onClick={() => setMenu(!showMenu)}>
                    <Icon 
                        size='1.4em' id="icon"
                        icon={showMenu ? collapsed : hamburger}  
                    />
                </div>
            </div>
        </header>
    )
} 

export default Header