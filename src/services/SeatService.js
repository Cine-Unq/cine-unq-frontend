import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromFunction = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
}

const getSalas = () => {
    return fetchWithAuthentication('GET', `${API}/salas/format`, {})
}

const getSeatsFromFunctionAdmin = () => {
    // return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/admin`, {})
    const body = {
        "cantColumnas": "6",
        "cantFilas": 6,
        "asientos": [
            {
                "id": 55,
                "posColumna": 0,
                "posFila": 0,
                "estado": "LIBRE"
            },
            {
                "id": 57,
                "posColumna": 1,
                "posFila": 0,
                "estado": "LIBRE"
            },
            {
                "id": 61,
                "posColumna": 2,
                "posFila": 0,
                "estado": "LIBRE"
            },
            {
                "id": 67,
                "posColumna": 3,
                "posFila": 0,
                "estado": "LIBRE"
            },
            {
                "id": 71,
                "posColumna": 4,
                "posFila": 0,
                "estado": "LIBRE"
            },
            {
                "id": 75,
                "posColumna": 5,
                "posFila": 0,
                "estado": "RESERVADO"
            },
            {
                "id": 58,
                "posColumna": 1,
                "posFila": 1,
                "estado": "LIBRE"
            },
            {
                "id": 62,
                "posColumna": 2,
                "posFila": 1,
                "estado": "LIBRE"
            },
            {
                "id": 76,
                "posColumna": 5,
                "posFila": 1,
                "estado": "RESERVADO"
            },
            {
                "id": 63,
                "posColumna": 2,
                "posFila": 2,
                "estado": "LIBRE"
            },
            {
                "id": 68,
                "posColumna": 3,
                "posFila": 2,
                "estado": "LIBRE"
            },
            {
                "id": 72,
                "posColumna": 4,
                "posFila": 2,
                "estado": "LIBRE"
            },
            {
                "id": 77,
                "posColumna": 5,
                "posFila": 2,
                "estado": "RESERVADO"
            },
            {
                "id": 64,
                "posColumna": 2,
                "posFila": 3,
                "estado": "LIBRE"
            },
            {
                "id": 69,
                "posColumna": 3,
                "posFila": 3,
                "estado": "LIBRE"
            },
            {
                "id": 73,
                "posColumna": 4,
                "posFila": 3,
                "estado": "LIBRE"
            },
            {
                "id": 78,
                "posColumna": 5,
                "posFila": 3,
                "estado": "RESERVADO"
            },
            {
                "id": 59,
                "posColumna": 1,
                "posFila": 4,
                "estado": "LIBRE"
            },
            {
                "id": 65,
                "posColumna": 2,
                "posFila": 4,
                "estado": "LIBRE"
            },
            {
                "id": 79,
                "posColumna": 5,
                "posFila": 4,
                "estado": "LIBRE"
            },
            {
                "id": 56,
                "posColumna": 0,
                "posFila": 5,
                "estado": "LIBRE"
            },
            {
                "id": 60,
                "posColumna": 1,
                "posFila": 5,
                "estado": "RESERVADO"
            },
            {
                "id": 66,
                "posColumna": 2,
                "posFila": 5,
                "estado": "LIBRE"
            },
            {
                "id": 70,
                "posColumna": 3,
                "posFila": 5,
                "estado": "LIBRE"
            },
            {
                "id": 74,
                "posColumna": 4,
                "posFila": 5,
                "estado": "RESERVADO"
            },
            {
                "id": 80,
                "posColumna": 5,
                "posFila": 5,
                "estado": "OCUPADO"
            }
        ]
    }
    return Promise.resolve(body);
}

const saveLayoutSala = (sala) => {
    return fetchWithAuthentication('POST', `${API}/salas/`, sala) 
}


const confirmSeats = (idCompra, idCliente, seats) => {
    const body = {
        "idCliente": idCliente,
        "idCompra": idCompra,
        "asientos": seats.map(s => s.id)
    }
    return fetchWithAuthentication('POST', `${API}/asientos/pelicula/funcion`, body)
}
export { getSeatsFromFunction, confirmSeats, getSeatsFromFunctionAdmin, saveLayoutSala, getSalas}; 
