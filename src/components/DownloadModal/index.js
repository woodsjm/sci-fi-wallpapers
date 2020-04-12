import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    console.log(this.props.handleOptionsSubmit())
  }

  render() {
    const { closeModal, showModal} = this.props
    const baseUrl = 'https://res.cloudinary.com/dlwxbby8o/image/upload/w_auto,c_scale/v1586647501/masterpieces/'
    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <section className="modal-description-section">
              <h5>Placeholder for list of image alteration options</h5>
              <section className="selection-item">
                <div>
                  <div className="selection-item-box">Hello</div>
                </div>
                <div className="selection-item-box" style={{
                  backgroundImage: `url("${baseUrl}/american_gothic.jpg")`,
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