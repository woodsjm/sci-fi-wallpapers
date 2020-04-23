import React from 'react'
import { Container, Divider, Icon, Segment } from 'semantic-ui-react'

import MainLayout from 'components/MainLayout'

import 'components/InfoPages/info-page.css'

const FAQ = () => {
    return(
        <MainLayout pageName="FAQ">
            <div className="content-flex-box" id="info-page">
                <Segment basic className="info-section">
                    <Segment raised className="info-card" inverted>
                        <Divider horizontal>
                            <Icon name="circle" color="yellow"/>
                        </Divider>
                        <Container className="info-card-text-container"  textAlign="justified">
                            <p className="text-block-start">Faq</p>
                            <p className="text-block-body"> goes here.
                            </p>
                        </Container> 
                    </Segment>
                </Segment>
            </div>
        </MainLayout>
    )
}

export default FAQ