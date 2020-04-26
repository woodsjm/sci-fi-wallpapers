import React, { useState } from 'react'
import { Accordion, Container, Divider, Icon, Segment } from 'semantic-ui-react'

import MainLayout from 'components/MainLayout'

import 'components/InfoPages/info-page.css'


class FAQ extends React.Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        return(
            <MainLayout pageName="FAQ">
                <div className="content-flex-box" id="info-page">
                    <Segment basic className="info-section">
                        <Segment raised className="info-card" inverted>
                            <Divider horizontal>
                                <Icon name="circle" color="yellow"/>
                            </Divider>
                            <Accordion className="accordion" styled>
                                <Accordion.Title
                                  active={activeIndex === 0}
                                  index={0}
                                  onClick={this.handleClick}
                                >
                                  <Icon name='dropdown' />
                                  What resolution does a wallpaper have?
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                  <p>
                                    The original image for each wallpaper has a resolution greater than 
                                    or equal to 3000 x 3000. When downloaded, the wallpaper will be transformed to match the native resolution of your device. 
                                  </p>
                                </Accordion.Content>

                                <Accordion.Title
                                  active={activeIndex === 1}
                                  index={1}
                                  onClick={this.handleClick}
                                >
                                  <Icon name='dropdown' />
                                  Why does it take a couple of seconds to download a wallpaper?
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>
                                  <p>
                                    A wallpaper has to be transformed on-the-fly after you click to download it. If a filter or style is applied as well, then there are additional transformations to make. 
                                  </p>
                                </Accordion.Content>

                                <Accordion.Title
                                  active={activeIndex === 2}
                                  index={2}
                                  onClick={this.handleClick}
                                >
                                  <Icon name='dropdown' />
                                  How do I apply custom effects to the wallpaper? 
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 2}>
                                  <p>
                                    To apply a filter and/or style, select the options button below the wallpaper. After selecting the effects you want to apply, click submit and the wallpaper will be downloaded.
                                  </p>
                                </Accordion.Content>
                                <Accordion.Title
                                  active={activeIndex === 3}
                                  index={3}
                                  onClick={this.handleClick}
                                >
                                  <Icon name='dropdown' />
                                  Will there be new filters or styles added in the future? 
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                  <p>
                                    Yes. Please, checkback at a later date.  
                                  </p>
                                </Accordion.Content>
                            </Accordion>
                            <Divider horizontal>
                                <Icon name="circle" color="yellow"/>
                            </Divider>
                        </Segment>
                    </Segment>
                </div>
            </MainLayout>
        )
    }
}

export default FAQ