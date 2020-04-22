import React from 'react'
import { Container, Header, Grid, Segment, Item, Divider, Icon } from 'semantic-ui-react'

import MainLayout from 'components/MainLayout'

import './about.css'

const About = () => {
    return(
        <MainLayout pageName="Info">
            <div className="content-flex-box">
                    <Segment basic className="about-section">
                        <Segment raised className="info-block" inverted>
                            <Divider horizontal>
                                <h3 className="block-title">A</h3><h3 className="about-title block-title">bout</h3>
                            </Divider>
                            <Container className="about-container"  textAlign="justified">
                                <p >
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>

                                <p> This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                            </Container>
                            <Segment basic textAlign="left">
                                <Icon name="circle" color="yellow"/>
                            </Segment>
                        </Segment>
                    </Segment>
                    <Divider horizontal/>
                    <Segment basic className="faq-section">
                        <Segment raised className="info-block" inverted>
                            <Divider horizontal>
                                <h3 className="faq-title block-title">FAQ</h3>
                            </Divider>
                        </Segment>

                    </Segment>
            </div>
        </MainLayout>
    )
}

export default About