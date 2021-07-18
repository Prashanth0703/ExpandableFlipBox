import React from "react";
import { Button, Modal } from "react-bootstrap";
function ButtonModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Comments
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.comments.map((val, ind) => (
                    <div key={val.id} className='comment-list'>
                        <p>{val.comment}<br/>Created by: {val.created_by}</p>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ButtonModal;
