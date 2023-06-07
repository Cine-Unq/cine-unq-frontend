import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { BsExclamationCircleFill } from "react-icons/bs";
export default function PopUpError({ body }) {
    const [show, setShow] = useState(true);
    return (
        <Modal data-testid='modal-error' show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <div>
                    <BsExclamationCircleFill/> Error
                </div>
            </Modal.Header>

            <Modal.Body >
                <h4>{body}</h4>
            </Modal.Body>
        </Modal>
    )
}