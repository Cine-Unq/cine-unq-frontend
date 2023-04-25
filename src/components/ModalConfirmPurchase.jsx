import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generatePurchase } from '../services/SeatService';
import Alert from 'react-bootstrap/Alert';


export default function ModalConfirmPurchase({ onClose, seats, idFunction }) {
    const [purchase, setPurchase]  = useState(false);
    const [error, setError] = useState(false);

    const handlePurchase = () => {
        generatePurchase(seats, idFunction)
            .then(res => {
                setPurchase(res)
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <>
            {purchase && <Navigate to={`/movie/purchase/qr/${purchase.id}`} replace={true}/>}
            <Modal show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
                <Modal.Header>
                    <Modal.Title>Confirmación compra ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{seats.length} asientos seleccionados :</p>
                    <ul style={{color: 'black'}}>
                        {seats.map((selected)=> (<li key={selected.id + selected.fila}>Silla columna {selected.columna} y fila {selected.fila} </li>))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
              Cancelar
                    </Button>
                    <Button variant="primary" onClick={handlePurchase}>
              Comprar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}