import Card from 'react-bootstrap/Card';
import Seat from '../assets/seat-cinema.png';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getPurchase } from '../services/PurchaseService';
import ModalConfirmSeat from './ModalConfirmSeat';
import { useParams } from 'react-router-dom';

export default function ListSeatsReserved() {
    const [purchase, setPurchase] = useState(null);
    const [seats, setSeats] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);
    const [modal, setModal] = useState(false);
    const { idCompra } = useParams();
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        getPurchase(idCompra).
            then(res => {
                setPurchase(res);
                const asientos = res.asientosOcupados.concat(res.asientosReservados);
                const seatsWithStyle  = addStyleToSeat(asientos)
                setSeats(seatsWithStyle)
            })}, []);
    useEffect(() => {
        getPurchase(idCompra).
            then(res => {
                setPurchase(res);
                const asientos = res.asientosOcupados.concat(res.asientosReservados);
                const seatsWithStyle  = addStyleToSeat(asientos)
                setSeats(seatsWithStyle)
            })}, [refresh]);
            
    const addStyleToSeat = (seats) => {
        const res = seats.map(a => {
            let obj = {...a};
            if (a.estado === 'OCUPADO') {
                obj.style = 'green';
            } else {
                obj.style = 'white';
            }
            return obj;
        })
        return res
    }
    const selectSeat = (seat) => {
        if (seat.estado === 'OCUPADO') {
            return
        }
        const updatesSeats = seats.map( s => {
            let copy = null;
            if (seat.id === s.id) {
                switch (seat.estado) {
                case 'RESERVADO' :
                    copy = {...s}; 
                    copy.estado = 'SELECTED';
                    copy.style =  'blue';
                    break;
                case 'SELECTED' : 
                    copy = {...s};
                    copy.estado = 'RESERVADO';
                    copy.style = 'white'
                    break;    
                }
            }
            return copy != null ? copy : s  
        })
        setSeats(updatesSeats) 
    }
    const handleModal = () => {
        setSeatsSelected(seats.filter(s => s.estado === 'SELECTED'))
        setModal(true)
    }

    const handleRefresh = () => {
        setModal(false)
        setRefresh(!refresh)
    }
    return (
        <div style={{color: 'white'}}>
            {modal ? <ModalConfirmSeat idCompra={idCompra} idCliente={purchase.clienteID} seats={seatsSelected} onClose={()=> setModal(false)} refresh={handleRefresh} />: <></>}
            {
                purchase && seats &&
            <>
                <p></p>
                <h2 style={{textAlign: 'center'}}>Película : {purchase.pelicula}</h2>
                <h2 style={{textAlign: 'center'}}>Función : {purchase.funcion}</h2>
                <h2 style={{textAlign: 'center'}}>Asientos reservados :</h2>
                <div className="d-flex justify-content-center">
                    <ul className="confirmacion">
                        <li>
                            <span className="seat" style={{background:'white'}}/> <small>Sin confirmar</small>
                        </li>
                        <li>
                            <span className="seat" style={{background:'green'}}/> <small>Confirmado</small>
                        </li>
                        <li>
                            <span className="seat" style={{background:'blue'}}/> <small>Seleccionado</small>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{width:200, color:'Black'}}>
                        {seats.map(asiento => {
                            return (
                                <Card data-testid='asiento-info' key={asiento.id} style={{background: asiento.style, marginBottom:10}} onClick={() => selectSeat(asiento)}>
                                    <Card.Img variant="top" src={Seat} />
                                    <Card.Body>
                                        <Card.Title>Asiento {`${asiento.letter}${asiento.posColumna + 1}`} </Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        }) }
                    </div>
                </div>
                {<p data-testid='cant-asientos-seleccionados-de-compra' className="d-flex justify-content-center">Asientos seleccionados {seats.filter(s => s.estado === 'SELECTED').length}</p>}
                <div className="d-flex justify-content-center">
                    <Button data-testid='confirmar-asientos' variant="secondary" onClick={handleModal}> Confirmar asientos</Button>
                </div>
            </>}
        </div>
    )
}