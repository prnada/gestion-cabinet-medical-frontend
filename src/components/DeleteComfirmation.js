import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConfirmation = (props) => {
  return (
    
       <div className="modal fade" tabIndex="-1" id="deleteEmployeeModal" role="dialog">
      <div className="modal-dialog" role="document">
  
      <Modal show={props.showModel} onHide={()=> { props.closeDeleteConfirmation() }} >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{ props.closeDeleteConfirmation() }}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{ props.deleteConfirmHandler() }}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  
  )
}

export default DeleteConfirmation
