import "../css/Cinema.css";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ShowCase from "./Showcase";
import Cinema from "./Cinema";
import { getSeatsFromFunction } from '../services/SeatService';
import ModalConfirmPurchase from "./ModalConfirmPurchase";
import { useParams } from 'react-router-dom';
import PopUpError from './PopupError';

export default function ContainerCinema() {
    const [matrix, setMatrix] = useState([]);
    const [modal, setModal] = useState(false);
    const { idFunction } = useParams();
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");
    useEffect(()=>{
        getSeatsFromFunction(idFunction)
            .then(data => {
                setMatrix(createMatrixWithSeats(data));
            })
            .catch(err => {
                setTextError(err.message);
                setShowError(true)
                
            })
    }, []);
    const createMatrixWithSeats = ({cantColumnas, cantFilas, asientos}) => {
        let matrix = [];
        for(let f=0; f < cantFilas; f++) {
            matrix.push([]);
            for(let c=0; c < cantColumnas; c++) {
                matrix[f][c] = {
                    "posFila":f,
                    "posColumna":c,
                    "estado": "NODISPONIBLE",
                    "selected": false
                };
            }
        }
        asientos.forEach(a => {
            matrix[a.posFila][a.posColumna] = {...a,selected:false};
        });
        return matrix;
    } 

    const selectedSeats = () => {
        return matrix.flat(1).filter(s => s.selected)
    }    
    const renderSeatsSelected = () => {
        return selectedSeats().map((seat,index)=> (<li data-testid='asientos-seleccionado' key={index}>Asiento {seat.nombre} </li>))
    }
    const handleModal = () => {
        setModal(true);
    }
    return (
        <>
            {showError && <PopUpError body={textError} />}
            {matrix.length > 0 &&
            <div className="App">
                {modal ? <ModalConfirmPurchase idFunction={idFunction} seats={selectedSeats()} onClose={()=> setModal(false)}/>: <></>}
                <ShowCase />
                <Cinema
                    matrix={matrix}
                    updateMatrix={setMatrix}
                />
                <p className="info" style={{color: 'white'}}>
                Has seleccionado <span className="count">{selectedSeats.length}</span> asientos.
                </p>
                <ul style={{color: 'white', padding: 10}}>
                    {renderSeatsSelected()}
                </ul>
                <Button data-testid='boton-comprar-asientos' variant="primary" size="lg" onClick={handleModal}>
                Comprar asientos
                </Button>
            </div>
            }
        </>
    );
}

