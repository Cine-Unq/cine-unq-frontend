import "../css/Cinema.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ShowCase from "./Showcase";
import Cinema from "./Cinema";
import { getSeatsFromMovie } from '../services/SeatService';

export default function CinemaMovie() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);

    useEffect(()=>{
        getSeatsFromMovie(1)
            .then(data => {
                setSeats(data)
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="App">
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
            <Button variant="secondary" size="lg" onClick={()=>{console.log(selectedSeats)}}>
                Comprar asientos
            </Button>
        </div>
    );
}

