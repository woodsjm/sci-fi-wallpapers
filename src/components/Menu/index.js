import React from 'react'
import { Link } from 'react-router-dom'

import { helpCircle, grid, home, info, user } from 'react-icons-kit/feather/'
import { Icon } from 'react-icons-kit'

import './menu.css'


const routes = [
    ["Feed", grid], 
    ["Info", info] 
]

const Menu = ({ isVisible }) => {
    const menuItems = routes.map((route, idx) => {
        return(
            <li key={idx} className="menu-item" >
                <Icon id="nav-icon" icon={route[1]} size='1em'/>
                <Link to={`/${route[0].toLowerCase()}`}>
                    {route[0]}
                </Link>
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