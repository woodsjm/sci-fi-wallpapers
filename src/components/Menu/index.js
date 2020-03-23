import React from 'react'

import { helpCircle, grid, home, info, user } from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'

import './menu.css'


const routes = [
    ["Home", home], ["Profile", user],
    ["Feed", grid], ["About", info], 
    ["FAQ", helpCircle]
]

const Menu = ({ visibility }) => {
    let menuState;
    menuState = visibility ? "show" : "hide"

    const menuItems = routes.map(route => {
        return(
            <li className="menu-item">
                <Icon id="nav-icon" icon={route[1]} size='1em' />
                {route[0]}
            </li>
        )
    })

    return(
        <div id="menu-slideout" className={menuState} >
            <section className="menu-container">
                <div className="menu-list">
                    {menuItems}
                </div>
            </section>
        </div>
    )
}

export default Menu