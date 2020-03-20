import React from 'react'

import './menu.css'


const Menu = ({ visibility }) => {
    let menuState;
    menuState = visibility ? "show" : "hide"
    return(
        <div id="menu-slideout" className={menuState} >
        </div>
    )
}

export default Menu