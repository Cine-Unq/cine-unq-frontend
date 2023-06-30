import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generateCompraMP } from '../services/PurchaseService';
import Alert from 'react-bootstrap/Alert';


export default function ModalConfirmPurchase({ onClose, seats, idFunction }) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handlePurchase = () => {
        setLoading(true);
        generateCompraMP(seats, idFunction)
            .then((res) => {
                window.location.replace(res.link)
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <>
            <Modal show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert> : <></>}
                <Modal.Header>
                    <Modal.Title>Confirmación compra ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{seats.length} asientos seleccionados :</p>
                    <ul style={{ color: 'black' }}>
                        {seats.map((selected,index) => (<li data-testid='asientos-seleccionados-modal' key={index}>Asiento {`${selected.letter}${selected.posColumna + 1} `}</li>))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    {!loading ?
                        <Button data-testid='buton-compra-modal-confirm' variant="primary" onClick={handlePurchase}>
                            Comprar
                        </Button> :
                        <Button data-testid='buton-cancelar-modal-confirm' variant="primary" onClick={handlePurchase}>
                            cargando...
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}