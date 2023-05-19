import { useEffect, useState } from "react";
import clsx from "clsx";

export default function DisplayStateSeats({ info }) {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        console.log(info)
        const data = [
            {
                "id": 1,
                "estaLibre": false,
                "columna": "A",
                "fila": "1"
            },
            {
                "id": 5,
                "estaLibre": false,
                "columna": "B",
                "fila": "1"
            },
            {
                "id": 9,
                "estaLibre": true,
                "columna": "C",
                "fila": "1"
            },
            {
                "id": 13,
                "estaLibre": true,
                "columna": "D",
                "fila": "1"
            },
            {
                "id": 17,
                "estaLibre": true,
                "columna": "E",
                "fila": "1"
            },
            {
                "id": 21,
                "estaLibre": true,
                "columna": "F",
                "fila": "1"
            },
            {
                "id": 25,
                "estaLibre": true,
                "columna": "G",
                "fila": "1"
            },
            {
                "id": 29,
                "estaLibre": true,
                "columna": "H",
                "fila": "1"
            },
            {
                "id": 33,
                "estaLibre": true,
                "columna": "I",
                "fila": "1"
            },
            {
                "id": 37,
                "estaLibre": true,
                "columna": "J",
                "fila": "1"
            },
            {
                "id": 41,
                "estaLibre": true,
                "columna": "K",
                "fila": "1"
            },
            {
                "id": 45,
                "estaLibre": true,
                "columna": "L",
                "fila": "1"
            },
            {
                "id": 49,
                "estaLibre": true,
                "columna": "M",
                "fila": "1"
            },
            {
                "id": 53,
                "estaLibre": true,
                "columna": "N",
                "fila": "1"
            },
            {
                "id": 2,
                "estaLibre": false,
                "columna": "A",
                "fila": "2"
            },
            {
                "id": 6,
                "estaLibre": true,
                "columna": "B",
                "fila": "2"
            },
            {
                "id": 10,
                "estaLibre": true,
                "columna": "C",
                "fila": "2"
            },
            {
                "id": 14,
                "estaLibre": true,
                "columna": "D",
                "fila": "2"
            },
            {
                "id": 18,
                "estaLibre": true,
                "columna": "E",
                "fila": "2"
            },
            {
                "id": 22,
                "estaLibre": true,
                "columna": "F",
                "fila": "2"
            },
            {
                "id": 26,
                "estaLibre": true,
                "columna": "G",
                "fila": "2"
            },
            {
                "id": 30,
                "estaLibre": true,
                "columna": "H",
                "fila": "2"
            },
            {
                "id": 34,
                "estaLibre": true,
                "columna": "I",
                "fila": "2"
            },
            {
                "id": 38,
                "estaLibre": true,
                "columna": "J",
                "fila": "2"
            },
            {
                "id": 42,
                "estaLibre": true,
                "columna": "K",
                "fila": "2"
            },
            {
                "id": 46,
                "estaLibre": true,
                "columna": "L",
                "fila": "2"
            },
            {
                "id": 50,
                "estaLibre": true,
                "columna": "M",
                "fila": "2"
            },
            {
                "id": 54,
                "estaLibre": true,
                "columna": "N",
                "fila": "2"
            },
            {
                "id": 3,
                "estaLibre": false,
                "columna": "A",
                "fila": "3"
            },
            {
                "id": 7,
                "estaLibre": true,
                "columna": "B",
                "fila": "3"
            },
            {
                "id": 11,
                "estaLibre": true,
                "columna": "C",
                "fila": "3"
            },
            {
                "id": 15,
                "estaLibre": true,
                "columna": "D",
                "fila": "3"
            },
            {
                "id": 19,
                "estaLibre": true,
                "columna": "E",
                "fila": "3"
            },
            {
                "id": 23,
                "estaLibre": true,
                "columna": "F",
                "fila": "3"
            },
            {
                "id": 27,
                "estaLibre": true,
                "columna": "G",
                "fila": "3"
            },
            {
                "id": 31,
                "estaLibre": true,
                "columna": "H",
                "fila": "3"
            },
            {
                "id": 35,
                "estaLibre": true,
                "columna": "I",
                "fila": "3"
            },
            {
                "id": 39,
                "estaLibre": true,
                "columna": "J",
                "fila": "3"
            },
            {
                "id": 43,
                "estaLibre": true,
                "columna": "K",
                "fila": "3"
            },
            {
                "id": 47,
                "estaLibre": true,
                "columna": "L",
                "fila": "3"
            },
            {
                "id": 51,
                "estaLibre": true,
                "columna": "M",
                "fila": "3"
            },
            {
                "id": 55,
                "estaLibre": true,
                "columna": "N",
                "fila": "3"
            },
            {
                "id": 4,
                "estaLibre": false,
                "columna": "A",
                "fila": "4"
            },
            {
                "id": 8,
                "estaLibre": true,
                "columna": "B",
                "fila": "4"
            },
            {
                "id": 12,
                "estaLibre": true,
                "columna": "C",
                "fila": "4"
            },
            {
                "id": 16,
                "estaLibre": true,
                "columna": "D",
                "fila": "4"
            },
            {
                "id": 20,
                "estaLibre": true,
                "columna": "E",
                "fila": "4"
            },
            {
                "id": 24,
                "estaLibre": true,
                "columna": "F",
                "fila": "4"
            },
            {
                "id": 28,
                "estaLibre": true,
                "columna": "G",
                "fila": "4"
            },
            {
                "id": 32,
                "estaLibre": true,
                "columna": "H",
                "fila": "4"
            },
            {
                "id": 36,
                "estaLibre": true,
                "columna": "I",
                "fila": "4"
            },
            {
                "id": 40,
                "estaLibre": true,
                "columna": "J",
                "fila": "4"
            },
            {
                "id": 44,
                "estaLibre": true,
                "columna": "K",
                "fila": "4"
            },
            {
                "id": 48,
                "estaLibre": true,
                "columna": "L",
                "fila": "4"
            },
            {
                "id": 52,
                "estaLibre": true,
                "columna": "M",
                "fila": "4"
            },
            {
                "id": 56,
                "estaLibre": true,
                "columna": "N",
                "fila": "4"
            }
        ]
        setSeats(data)
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
                            const isOccupied = !seat.estaLibre;
                            return (
                                <span
                                    tabIndex="0"
                                    key={seat.id}
                                    className={clsx(
                                        "seat",
                                        !isOccupied && "selected",
                                        isOccupied && "occupied"
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