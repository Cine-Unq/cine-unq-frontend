import React, { useState } from "react";
// import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generateCompraMP } from '../services/SeatService';
import Alert from 'react-bootstrap/Alert';
//import { createLinkPay } from "../services/MercadoPagoService";


export default function ModalConfirmPurchase({ onClose, seats, idFunction }) {
    //const [purchase, setPurchase] = useState(false);
    const [error, setError] = useState(false);
    const handlePurchase = () => {

        generateCompraMP(seats, idFunction)
            .then(res => {
                window.location.replace(res.link)
            })
            .catch(err => {
                setError(err)
            })
        // createLinkPay()
        //     .then((res) => window.location.replace(res.link_pago))
    }

    return (
        <>
            {/* {purchase && <Navigate to={`/movie/purchase/qr/${purchase.compraID}`} replace={true} />} */}
            <Modal show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert> : <></>}
                <Modal.Header>
                    <Modal.Title>Confirmación compra ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{seats.length} asientos seleccionados :</p>
                    <ul style={{ color: 'black' }}>
                        {seats.map((selected) => (<li key={selected.id + selected.fila}>Silla columna {selected.columna} y fila {selected.fila} </li>))}
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