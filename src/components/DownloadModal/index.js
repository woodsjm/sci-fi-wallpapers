import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal, Menu, Dropdown } from 'semantic-ui-react'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        masterpieces: [
          {key: 1, text: "American Gothic", value: "american_gothic", onClick: (e) => this.handleChange(e, 0)},
          {key: 2, text: "Mona Lisa", value: "mona_lisa", onClick: (e) => this.handleChange(e, 1)}
        ],
        selectedMasterpiece: 'american_gothic'
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = () => {
    this.props.handleOptionsSubmit(this.state.selectedMasterpiece)
  }

  handleChange = (e, key) => {
    console.log(this.state.masterpieces[key].value)
    this.setState({ selectedMasterpiece: this.state.masterpieces[key].value})
    //this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { closeModal, showModal} = this.props
    const baseUrl = 'https://res.cloudinary.com/dlwxbby8o/image/upload/w_auto,c_scale/v1586647501/masterpieces/'

    // const dropdownOptions = [
    //       {key: 1, text: "American Gothic", value: "american_gothic", onClick: () => this.handleChange(0)},
    //       {key: 2, text: "Mona Lisa", value: "mona_lisa", onClick: () => this.handleChange(1)}
    // ]

    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <section className="modal-description-section">
              <h5>Placeholder for list of image alteration options</h5>
              <section className="selection-item">
                <div>
                  <div className="selection-item-box" id="selection-dropdown">
                    <Menu compact>
                    <Dropdown text="Masterpiece" options={this.state.masterpieces} simple item/>
                    </Menu>
                  </div>
                </div>
                <div className="selection-item-box" style={{
                  width: '100px',
                  backgroundImage: `url("${baseUrl}/${this.state.selectedMasterpiece}.jpg")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%'}}>
                </div>
              </section>
            </section>

           <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>

           <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>
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