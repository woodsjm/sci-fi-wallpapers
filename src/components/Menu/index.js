import React from 'react'

import { helpCircle, home, info } from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'

import './menu.css'


const routes = [["Home", home], ["About", info], ["FAQ", helpCircle]]

const Menu = ({ visibility }) => {
    let menuState;
    menuState = visibility ? "show" : "hide"

    const menuItems = routes.map(route => {
        return(
            <li className="menu-item">
                <Icon id="nav-icon" icon={route[1]} size='1.15em' />
                {route[0]}
            </li>
        )
    })

    return(
        <div id="menu-slideout" className={menuState} >
            <section className="menu-container">
                <ul className="menu-list">
                    {menuItems}
                </ul>
            </section>
        </div>
    )
}

export default Menu