import React, { Component } from 'react'
import { 
  Button, Header, Icon, Label, Modal, 
  Menu, Dropdown, Divider, Segment
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
        effectImageStyle: null

      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async () => {
    const transformations = await this.formatTransformations()
    const response = await this.props.handleOptionsSubmit(transformations)
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
      </Modal>
    )
  }
} 
  
export default DownloadModal