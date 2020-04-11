import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import './downloadModal.css'


class DownloadModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    console.log("Inside handle")
    console.log(this.props.handleOptionsSubmit())
  }

  render() {
    const { closeModal, showModal} = this.props
    return(
      <Modal className="modal-container" open={showModal}>
        <Header className="modal-header">Download Options</Header>
        <Modal.Content scrolling className="modal-content">
          <Modal.Description>
            <p>Placeholder for list of image alteration options</p>

            <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in.</p>

           <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>

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