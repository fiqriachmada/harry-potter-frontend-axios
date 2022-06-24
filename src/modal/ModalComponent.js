import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Book Delete Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are You sure to delete this?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="primary">Close</Button>
        <Button onClick={props.handleDeleteTrue} variant="danger">Delete</Button>
        
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
