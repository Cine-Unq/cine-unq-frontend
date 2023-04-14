import "../css/Cinema.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ShowCase from "./Showcase";
import Cinema from "./Cinema";
import { getSeatsFromMovie } from '../services/SeatService';
import ModalConfirmPurchase from "./ModalConfirmPurchase";
export default function CinemaMovie() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [modal, setModal] = useState(false);
    useEffect(()=>{
        getSeatsFromMovie(1)
            .then(data => {
                setSeats(data)
            })
            .catch(err => console.log(err))
    }, []);

    const handleModal = () => {
        setModal(true);
    }
    return (
        <div className="App">
            {modal ? <ModalConfirmPurchase seats={selectedSeats} onClose={()=> setModal(false)}/>: <></>}
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
    );
}

