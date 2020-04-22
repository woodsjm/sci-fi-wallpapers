import React, { useState } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Menu from 'components/Menu'


const MainLayout = ({ children, pageName }) => {
    return(
       <div>
          <Header title={pageName}/>
            <div className="content-container">
                {children}
            </div>
       </div>
    )
}

export default MainLayout