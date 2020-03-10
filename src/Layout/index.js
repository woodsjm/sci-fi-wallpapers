import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


const Layout = (props) => {
    
    return(
       <div >
          <Header />
            <div className="feed">
                <section className="scrollable">
                    {props.children}
                </section>
            </div>
          <Footer />
       </div>
    )
}

export default Layout