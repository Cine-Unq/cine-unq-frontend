import { useEffect, useState } from "react";
import clsx from "clsx";
import { getSeatsFromFunctionAdmin } from "../services/SeatService";
export default function DisplayStateSeats({ info }) {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        getSeatsFromFunctionAdmin(info.idFunction).
            then(data => {
                setSeats(data)
            })
    }, [])
    return (
        <>
            <div className="d-flex justify-content-center">
                <ul className="confirmacion">
                    <li>
                        <span className="seat"/> <small>Sin reservar</small>
                    </li>
                    <li>
                        <span className="seat" style={{background:'yellow'}}/> <small>Reservado</small>
                    </li>
                    <li>
                        <span className="seat" style={{background:'green'}}/> <small>Confirmado</small>
                    </li>
                </ul>
            </div>
            <div className="App">
                <div className="Cinema">
                    <div className="screen" />
                    <div className="seats">
                        {seats.map((seat) => {
                            
                            return (
                                <span
                                    tabIndex="0"
                                    key={seat.id}
                                    className={clsx(
                                        seat.estaLibre && "seat",
                                        seat.estaReservado && "seat reserved",
                                        seat.estaOcupado && "seat confirmed"
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}