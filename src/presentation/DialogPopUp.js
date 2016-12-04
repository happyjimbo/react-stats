//import React, { Component } from 'react';
import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

//class DialogPopUp extends Component {

const DialogPopUp = ( { close, 
                        display,                        
                        closeButtonText, 
                        saveButtonText, 
                        titleText, 
                        bodyText} ) => {
  if (!display) {    
    return (<div></div>);
  }

  return (
    <div className="DialogPopUp">
      <Modal.Dialog>     
        <Modal.Header>
          <Modal.Title>{titleText}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {bodyText}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={e => close()}>{closeButtonText}</Button>
          <Button bsStyle="primary">{saveButtonText}</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  );
}

DialogPopUp.PropTypes = {
  display:PropTypes.bool.isRequired,
  close:PropTypes.func.isRequired,
  closeButtonText:PropTypes.string.isRequired,
  saveButtonText:PropTypes.string.isRequired,
  titleText:PropTypes.string.isRequired,
  bodyText:PropTypes.string.isRequired
}
  // render() {
  //   return(this.props.display ? this.modalInstance : null);
  // }
//}
export default DialogPopUp;