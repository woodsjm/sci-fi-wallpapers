import React, { Component, useState } from 'react'

import { Icon } from 'react-icons-kit'
import { menu, x } from 'react-icons-kit/feather/'
import Menu from 'components/Menu'

import './header.css'

// let icon = menu
// let showMenu = false
// // const [showMenu, toggle] = useState(false)
// const toggle = () => {
//     showMenu = !showMenu
//     icon = icon !== x ? x : menu
//     console.log(icon)  
// } 

const Header = () => {
    let hamburger = menu
    let collapsed = x
    const [showMenu, setMenu] = useState(false)
    const [showHamburger, setIcon] = useState(true)
    const toggle = (currentIcon) => {
        setIcon(!showHamburger)
        setMenu(!showMenu)
        //icon = icon !== x ? x : menu 
    }  
    return(
        <header className="header">
            <div className="nav-container">
                <div className="nav-item logo" onClick={toggle}>
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
                     onClick={toggle}
                >
                    <Icon icon={showHamburger ? menu : x} size='1.4em' id="icon"  />
                </div>
                {showMenu ? <Menu /> : null}
            </div>
        </header>
    )
} 

export default Header