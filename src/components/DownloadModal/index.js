import React, { Component } from 'react'
import { 
  Button, Header, Icon, Label, Modal, 
  Menu, Dropdown, Divider, Progress, Segment
} from 'semantic-ui-react'

import BasicSlider from 'components/BasicSlider'
import { colorFilters, imageStyles } from 'components/DownloadModal/dropdownOptions.js'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        effectColorFilter: null,
        sliderColorFilter: 0,
        effectImageStyle: null,
        loading: false,
        percent: 0

      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async (props) => {
    this.setState({ loading: true})
    const progress = setInterval(() => this.incrementProgress(), 1500)
    const transformations = await this.formatTransformations()
    const response = await this.props.handleOptionsSubmit(transformations)
    if (response) {
      clearInterval(progress)
      const finish = await this.setState({ percent: 100})
      if (finish) {
        setTimeout(() => this.setState({ loading: false}), 500)
      }
      setTimeout(() => this.props.closeModal(), 500)
    } else {
      clearInterval(progress)
      await this.setState({ loading: false})
      this.props.closeModal()
    }
  }

  formatTransformations = () => {
    const { effectColorFilter, effectImageStyle, sliderColorFilter } = this.state
    const possibleTransformations = [
      {effect: effectColorFilter == null ? effectColorFilter : `${effectColorFilter}:${sliderColorFilter}`},
      {effect: effectImageStyle}
    ]
    const finalTransformations = possibleTransformations.filter(t => t.effect !== null)
    return finalTransformations
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value })
  }

  handleDropdown = (event, data) => {
    this.setState({ [data.name]: data.value})
  }

  incrementProgress = () => {
    console.log("hitting increment")
    this.setState((prevState) => ({
      percent: prevState.percent > 60 ? 80 : prevState.percent + 20,
    }))
  }

  render() {

    let filterIntensity;
    const { closeModal, showModal} = this.props

    if (this.state.sliderColorFilter != null) filterIntensity = this.state.sliderColorFilter 
    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <section className="modal-description-section">
              <Segment >
                <p>Color filters:</p>
                <section>
                  <Dropdown
                    name='effectColorFilter'
                    placeholder='No filter'
                    closeOnBlur
                    selection
                    options={colorFilters}
                    onChange={this.handleDropdown}
                  /> 
                </section>
                <Divider/>
                <section>
                  <BasicSlider max={100} min={0} start={0} step={1} handleSlider={this.handleChange} currentVal={filterIntensity} name='sliderColorFilter' />
                  <br/>
                  <Label>{filterIntensity}</Label>
                </section>
              </Segment>
              <Segment >
                <p>Image Styles:</p>
                <section>
                  <Dropdown
                    name='effectImageStyle'
                    placeholder='No style'
                    closeOnBlur
                    selection
                    options={imageStyles}
                    onChange={this.handleDropdown}
                  /> 
                </section>
              </Segment>
            </section>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions >
          <Button primary onClick={this.handleSubmit}>
            Submit <Icon/>
          </Button>
          <Button primary onClick={closeModal}>
            Close <Icon/>
          </Button>
        </Modal.Actions>
        <section>
          {this.state.loading ? <Progress percent={this.state.percent} indicating /> : null}
        </section>
      </Modal>
    )
  }
} 
  
export default DownloadModal