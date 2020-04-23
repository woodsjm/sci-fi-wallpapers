import React from 'react'
import { Link } from 'react-router-dom'

import { grid, helpCircle, info} from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'

import './menu.css'


const routes = [
    ["Wallpapers", '/', grid], 
    ["About", '/about', info],
    ["FAQ", '/faq', helpCircle] 
]

const Menu = ({ isVisible }) => {
    const menuItems = routes.map((route, idx) => {
        return(
            <div className="menu-grid-row">
                <div className="menu-icon-container">
                    <Icon id="nav-icon" icon={route[2]} size='1em'/>
                </div>
                <Link to={route[1]}>
                    <div className="menu-item-container">
                        <p className="menu-item-text">{route[0]}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return(
        <section id="menu-slideout"  style={{width: `${isVisible ? '50%' : '0'}`}} >
            <div className="menu-container">
                <div className="menu-grid">
                    {menuItems}
                </div>
            </div>
        </section>
    )
}

export default Menu