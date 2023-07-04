/* eslint-disable no-unused-vars */
import { useState } from "react"; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createFunction } from "../services/MovieService";


export default function ModalConfirmCreateFunction({ movie, sala, time, day, onClose, successCreate,setErrorr}) {
    const [error, setError] = useState(false);

    const handleConfirmCreateFunction = () => {
        createFunction(movie, sala, time, day)
            .then(() => {
                onClose(true);
                successCreate("Se creo exitosamente la función");
            })
            .catch(err => {
                onClose(true);
                setErrorr(err.message);
            })
    }

    return (
        <>
            <Modal data-testid='modal-confirmacion-creacion-funcion' show={true} onHide={onClose}>
                {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
                <Modal.Header>
                    <Modal.Title>Confirmar alta de una función </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Horario: {time}</p>
                    <p> Pelicula Seleccionada: {movie.nombre}</p>
                    <p> Sala Seleccionada: {sala.nombre}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button data-testid='confirmar-creacion-funcion' variant="primary" onClick={handleConfirmCreateFunction}>
                        Confirmar 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}