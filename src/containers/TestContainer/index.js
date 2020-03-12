import React from 'react'

import './testcontainer.css'


const TestContainer = () => {
    return(
        <div >
          <header class="header">Header</header>

              <div class="wrapper">
                  <section class="content">
                    <section style={{height: '1000px', border: '2px solid black'}}>
                    </section>
                  </section>
              </div>

          <footer class="footer">Footer</footer>
        </div>
    )
}

export default TestContainer