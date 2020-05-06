import React from 'react'
import { Container, Divider, Icon, Segment } from 'semantic-ui-react'

import MainLayout from 'components/MainLayout'

import 'components/InfoPages/info-page.css'

const About = () => {
    return(
        <MainLayout pageName="About">
            <div className="content-flex-box" id="info-page">
                <Segment basic className="info-section">
                    <Segment raised className="info-card" inverted>
                        <Divider horizontal>
                            <h3 className="info-card-title">P</h3>
                            <h3 className="info-card-title info-card-title-body">roject</h3>
                        </Divider>
                        <Container className="info-card-text-container"  textAlign="justified">
                            <p className="text-block-start">Syfy Wallpapers</p>
                            <p className="text-block-body"> is a collection of sci-fi themed wallpapers, dynamically scaled to fit a device's display upon download.
                            </p>
                            <Segment basic textAlign="center">
                                <Icon name="circle" color="yellow"/>
                            </Segment>
                        </Container> 
                    </Segment>
                </Segment>

                <Divider horizontal/>

                <Segment basic className="info-section">
                    <Segment raised className="info-card" inverted>
                        <Divider horizontal>
                            <h3 className="info-card-title">B</h3>
                            <h3 className="info-card-title info-card-title-body">ackstory</h3>
                        </Divider>
                        <Container className="info-card-text-container"  textAlign="justified">
                        <p className="text-block-start">This</p>
                        <p className="text-block-body"> project grew out of frustration with the typical experience of finding a wallpaper for my laptop or phone. If the original image had a higher resolution than my display, the background might be too sharp. If the image resolution was too low, the background might be grainy.
                        </p>
                        <Segment basic textAlign="center">
                            <Icon name="circle" color="yellow"/>
                            <Icon name="circle" color="yellow"/>
                        </Segment>
                        <p className="text-block-start">The</p>
                        <p className="text-block-body"> normal way of handling this was to download a version of the wallpaper which matched my display resolution. This, however, required that I either remember the resolution of my device or that the site had named device filters (e.g. iPhone 11 Plus). 
                        </p>
                        <Segment basic textAlign="center">
                            <Icon name="circle" color="yellow"/>
                            <Icon name="circle" color="yellow"/>
                        </Segment>
                        <p className="text-block-start">Moreover,</p>
                        <p className="text-block-body"> when I wanted to apply custom filters or styling, I had to use a separate site or program. I just wanted one place for wallpapers, with no need for worrying about resolution issues, and where custom effects could be applied before downloading.
                        </p>
                        </Container>
                    </Segment>
                </Segment>
            </div>
        </MainLayout>
    )
}

export default About