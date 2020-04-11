import React from 'react'

import { helpCircle, grid, home, info, user } from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'

import './menu.css'


const routes = [
    ["Home", home], ["Profile", user],
    ["Feed", grid], ["About", info], 
    ["FAQ", helpCircle]
]

const Menu = ({ isVisible }) => {
    const menuItems = routes.map((route, idx) => {
        return(
            <li key={idx} className="menu-item">
                <Icon id="nav-icon" icon={route[1]} size='1em' />
                {route[0]}
            </li>
        )
    })

    return(
        <div id="menu-slideout"  style={{width: `${isVisible ? '50%' : '0'}`}} >
            <section className="menu-container">
                <div className="menu-list">
                    {menuItems}
                </div>
            </section>
        </div>
    )
}

export default Menu