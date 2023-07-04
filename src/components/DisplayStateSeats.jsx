import { useEffect, useState } from "react";
import { getSeatsFromFunctionAdmin } from "../services/SeatService";
export default function DisplayStateSeats({ info }) {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        getSeatsFromFunctionAdmin(info.idFunction).
            then(data => {
                setSeats(createMatrixWithSeats(data))
            })
    }, [])

    const createMatrixWithSeats = ({ cantColumnas, cantFilas, asientos }) => {
        let matrix = [];
        for (let f = 0; f < cantFilas; f++) {
            matrix.push([]);
            for (let c = 0; c < cantColumnas; c++) {
                matrix[f][c] = {
                    "posFila": f,
                    "posColumna": c,
                    "estado": "NODISPONIBLE",
                    "selected": false
                };
            }
        }
        asientos.forEach(a => {
            matrix[a.posFila][a.posColumna] = { ...a, selected: false };
        });
        return matrix;
    }

    const colorOfStateSeat = (estado) => {
        if (estado === "LIBRE")
            return { background: "white" }
        if (estado === "RESERVADO")
            return { background: "yellow" }
        if (estado === "OCUPADO")
            return { background: "green" };
        return { background: "black" };

    }
    const renderSeats = () => {
        if (seats.length === 0) {
            return <></>
        }
        let layout = {
            display: 'grid',
            gridTemplateColumns: `repeat(${seats[0].length}, 1fr)`,
            gridTemplateRows: `repeat(${seats.length}, 1fr)`,
            gridColumnGap: 2,
            gridRowGap: 4,
        };
        return (
            <div style={layout} >
                {
                    seats.flat(1).map((seat, index) => {
                        const style = colorOfStateSeat(seat.estado);
                        return (
                            <div className="seat" key={index} style={style}>
                            </div>
                        )


                    })
                }
            </div>
        )
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <ul className="confirmacion">
                    <li>
                        <span className="seat" style={{ background: 'white' }} /> <small>Sin reservar</small>
                    </li>
                    <li>
                        <span className="seat" style={{ background: 'yellow' }} /> <small>Reservado</small>
                    </li>
                    <li>
                        <span className="seat" style={{ background: 'green' }} /> <small>Confirmado</small>
                    </li>
                </ul>
            </div>

            <div className="Cinema">
                <div className="screen" data-testid='estado-asientos' />
                {
                    renderSeats()
                }
            </div>
        </div>
    );
}