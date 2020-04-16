import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Menu, Dropdown } from 'semantic-ui-react'
import { Image, Transformation } from 'cloudinary-react'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        masterpieces: [
          {key: 1, text: "American Gothic", value: "american_gothic", onClick: (e) => this.handleChange(e, 0)},
          {key: 2, text: "Mona Lisa", value: "mona_lisa", onClick: (e) => this.handleChange(e, 1)},
          {key: 3, text: "Starry Night", value: "starry_night", onClick: (e) => this.handleChange(e, 2)},
          {key: 4, text: "Guernica", value: "guernica", onClick: (e) => this.handleChange(e, 3)}
        ],
        selectedMasterpiece: 0
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async () => {
    const response = await this.props.handleOptionsSubmit(this.state.selectedMasterpiece)
  }

  handleChange = (e, key) => {
    console.log(key)
    //console.log(this.state.masterpieces[key].value)
    this.setState({ selectedMasterpiece: key})
  }

  render() {
    const { closeModal, showModal} = this.props
    const baseUrl = 'https://res.cloudinary.com/dlwxbby8o/image/upload/w_auto,c_scale/v1_1/masterpieces'

    let currentMasterpiece;
    if (this.state.selectedMasterpiece && this.state.masterpieces) {
      currentMasterpiece = this.state.masterpieces[this.state.selectedMasterpiece].text
    }

    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <section className="modal-description-section">
              <h5>Choose a masterpiece to style the wallpaper with</h5>
              <section className="selection-item">
                <div>
                  <div className="selection-item-box">
                    <div>
                      <h6 className="selection-header">Masterpieces:</h6>
                      <Menu id="selection-dropdown">
                      <Dropdown text={currentMasterpiece} options={this.state.masterpieces} item/>
                      </Menu>
                    </div>
                  </div>
                </div>
                <div className="selection-item-box" >
                  <Image publicId={`masterpieces/${this.state.masterpieces[this.state.selectedMasterpiece].value}`} >
                    <Transformation width="100" height="100" crop="scale" />
                  </Image>
                </div>
              </section>
            </section>

           <p>New options coming soon.</p>
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