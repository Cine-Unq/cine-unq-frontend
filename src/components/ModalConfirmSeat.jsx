import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { confirmSeats } from '../services/SeatService';
import Alert from 'react-bootstrap/Alert';


export default function ModalConfirmSeat({ onClose, seats, idCompra, idCliente, refresh }) {
    const [error, setError] = useState(false);

    const handleConfirmSeats = () => {
        if (seats.length === 0) {
            setError({message: "no hay ningun asiento seleccionado"})
        } else {
            confirmSeats(idCompra, idCliente, seats)
                .then(() => {
                    refresh()
                })
                .catch(err => {
                    setError(err)
                })
        }
    }

    return (
        <>
            <Modal show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error.message} </Alert>: <></>}
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
                    <Button data-testid='boton-actualizar-asientos' variant="primary" onClick={handleConfirmSeats}>
              Actualizar asientos
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}