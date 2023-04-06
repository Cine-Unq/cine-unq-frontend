import "../css/Cinema.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ShowCase from "./Showcase";
import Cinema from "./Cinema";
import { getSeatsFromMovie, generatePurchase } from '../services/SeatService';
import { Navigate } from 'react-router-dom';

export default function CinemaMovie() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [navigate, setNavigate]  = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        getSeatsFromMovie(1)
            .then(data => {
                setSeats(data)
            })
            .catch(err => console.log(err))
    }, []);

    const handlePurchase = () => {
        generatePurchase(selectedSeats)
            .then(() => setNavigate(true))
            .catch(err => setError(err))
    }
    return (
        <div className="App">
            {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
            {navigate && <Navigate to="/movie/purchase/qr" replace={true}/>}
            <ShowCase />
            <Cinema
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(selectedSeats) =>
                    setSelectedSeats(selectedSeats)
                }
                seats={seats}
            />
            <p className="info">
                Has seleccionado <span className="count">{selectedSeats.length}</span> asientos.
            </p>
            <ul>
                {selectedSeats.map((selected)=> (<li key={selected.id + selected.fila} >Silla columna {selected.columna} y fila {selected.fila} </li>))}
            </ul>
            <Button variant="secondary" size="lg" onClick={handlePurchase}>
                Comprar asientos
            </Button>
        </div>
    );
}

