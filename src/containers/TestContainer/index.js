import React from 'react'

import './testcontainer.css'


const TestContainer = () => {
    return(
        <div >
          <div class="wrapper">
            <section class="content">
              <section style={{height: '1000px', border: '2px solid black'}}>
                <div style={{
                  backgroundImage: 'url(/assets/syfy_logo.svg)',
                  height: '100px', width: '100px'}}
                >
                </div>
              </section>
            </section>
          </div> 
        </div>
    )
}

export default TestContainer