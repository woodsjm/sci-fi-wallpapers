import React, { Component } from 'react'
import { 
  Button, Header, Icon, Label, Modal, 
  Menu, Dropdown, Divider, Segment
} from 'semantic-ui-react'

import BasicSlider from 'components/BasicSlider'
import { colorFilters } from 'components/DownloadModal/dropdownOptions.js'
import DropdownExample from 'components/DropDown'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        effect: null,
        filterIntensity: 10
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async () => {
    const masterpiece = this.state.masterpieces[this.state.selectedMasterpiece].value
    const response = await this.props.handleOptionsSubmit(`masterpieces:${masterpiece}`)
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value })
  }

  render() {
    let filterIntensity;
    const { closeModal, showModal} = this.props

    if (this.state.filterIntensity != null) filterIntensity = this.state.filterIntensity

    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <section className="modal-description-section">
              <Segment >
                <p>Color filters:</p>
                <section>
                  <DropdownExample options={colorFilters}/> 
                </section>
                <Divider/>
                <section>
                  <BasicSlider max={100} min={0} start={10} step={1} handleSlider={this.handleChange} currentVal={filterIntensity} name='filterIntensity' />
                  <Label>{filterIntensity}</Label>
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