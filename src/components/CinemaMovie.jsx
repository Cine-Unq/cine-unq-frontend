import "../css/Cinema.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ShowCase from "./Showcase";
import Cinema from "./Cinema";
import { getSeatsFromMovie } from '../services/SeatService';
import ModalConfirmPurchase from "./ModalConfirmPurchase";
import { useParams } from 'react-router-dom';
import PopUpError from './PopupError';

export default function CinemaMovie() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [modal, setModal] = useState(false);
    const { idFunction } = useParams();
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");
    useEffect(()=>{
        getSeatsFromMovie(idFunction)
            .then(data => {
                if (data.length > 0) {
                    setSeats(data)
                } else {
                    setTextError("No existen asientos para esta funcion");
                    setShowError(true)
                }
            })
            .catch(err => {
                setTextError(err.message);
                setShowError(true)
                
            })
    }, []);

    const handleModal = () => {
        setModal(true);
    }
    return (
        <>
            <PopUpError showPopupError={showError} body={textError} />
            {seats.length > 0 &&
            <div className="App">
                {modal ? <ModalConfirmPurchase idFunction={idFunction} seats={selectedSeats} onClose={()=> setModal(false)}/>: <></>}
                <ShowCase />
                <Cinema
                    selectedSeats={selectedSeats}
                    onSelectedSeatsChange={(selectedSeats) =>
                        setSelectedSeats(selectedSeats)
                    }
                    seats={seats}
                />
                <p className="info" style={{color: 'white'}}>
                Has seleccionado <span className="count">{selectedSeats.length}</span> asientos.
                </p>
                <ul style={{color: 'white', padding: 10}}>
                    {selectedSeats.map((selected)=> (<li key={selected.id + selected.fila}>Silla columna {selected.columna} y fila {selected.fila} </li>))}
                </ul>
                <Button variant="primary" size="lg" onClick={handleModal}>
                Comprar asientos
                </Button>
            </div>
            }
        </>
    );
}

