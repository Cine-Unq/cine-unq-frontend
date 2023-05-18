import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { confirmSeats } from '../services/SeatService';
import Alert from 'react-bootstrap/Alert';


export default function ModalConfirmSeat({ onClose, seats, idCompra, idCliente }) {
    const [purchase, setPurchase]  = useState(false);
    const [error, setError] = useState(false);

    const handleConfirmSeats = () => {
        confirmSeats(idCompra, idCliente, seats)
            .then(res => {
                setPurchase(res)
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <>
            {purchase && <Navigate to={`/panel/info/purchase/${idCompra}`} replace={true}/>}
            <Modal show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
                <Modal.Header>
                    <Modal.Title>Confirmar asientos de la compra </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Asientos seleccionados : {seats.length}</p>
                    <ul style={{color: 'black'}}>
                        {seats.map((selected)=> (<li key={selected.id + selected.fila}>Asiento  {selected.fila} {selected.columna} </li>))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
              Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirmSeats}>
              Actualizar asientos
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}