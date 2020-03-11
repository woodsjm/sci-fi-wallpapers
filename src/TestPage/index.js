import React from 'react'

import CSSCard from '../CSSCard'

import './testpage.css'


const TestPage = () => {
    return(
        <div >
          <header class="header">Header</header>

              <div class="wrapper">
                  <section class="content">
                    <section style={{height: '1000px', border: '2px solid black'}}>

                        <CSSCard number={1}/>
                        <CSSCard number={2}/>
                        <CSSCard number={3}/>
                        <CSSCard number={4}/>

                    </section>
                  </section>
              </div>

          <footer class="footer">Footer</footer>
        </div>
    )
}

export default TestPage