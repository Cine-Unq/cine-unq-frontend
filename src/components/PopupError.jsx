import Modal from 'react-bootstrap/Modal';
import { BsExclamationCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function PopUpError({ showPopupError, body }) {

    return (
        <Modal show={showPopupError} >
            <Modal.Header>
                <div>
                    <BsExclamationCircleFill/> Error
                </div>
            </Modal.Header>

            <Modal.Body>
                <h4>{body}</h4>
            </Modal.Body>

            <Modal.Footer>
                <Link to="/billboard/movies"> Regresar al inicio  </Link>
            </Modal.Footer>
        </Modal>
    )
}