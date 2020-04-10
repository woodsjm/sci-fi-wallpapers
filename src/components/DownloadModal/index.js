import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import './downloadModal.css'


const DownloadModal = ({ handleModal, showModal }) => (
  <Modal className="modal-container" open={showModal} dimmer='default'>
  <Modal.Header className="modal-header"><p className="modal-header-content">Modal Header</p></Modal.Header>
    <Modal.Content scrolling className="modal-content">
      <Modal.Description>
        
        <p>
          This is an of expanded content that will cause the modal's
          dimmer to scroll
        </p>

        <p>
          Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in.
        </p>

       <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>

       <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>

       <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>


      </Modal.Description>
    </Modal.Content>
    <Modal.Actions >
      <Button primary onClick={handleModal}>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default DownloadModal