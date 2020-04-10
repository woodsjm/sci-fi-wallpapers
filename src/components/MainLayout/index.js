import React, { useState } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Menu from 'components/Menu'


const MainLayout = (props) => {
    return(
       <div>
          <Header />
            <div className="content-container">
                {props.children}
            </div>
       </div>
    )
}

export default MainLayout