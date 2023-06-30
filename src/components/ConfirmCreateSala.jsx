import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ConfirmCreateSala({close,confirm}) {
    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Confirmar alta de una Sala </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancelar
                </Button>
                <Button data-testid='confirmar-creacion-sala' variant="primary" onClick={()=> {
                    close()
                    confirm()
                }}>
                    Confirmar 
                </Button>
            </Modal.Footer>
        </Modal>
    )
}