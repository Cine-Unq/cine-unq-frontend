import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromFunction = () => {
    // return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
    const sala = {
        "cantFilas": 6,
        "cantColumnas": 8,
        "asientos": [
            {
                "posFila": 0,
                "posColumna": 0,
                "estado": "RESERVADO",
            },
            {
                "posFila": 0,
                "posColumna": 1,
                "estado": "RESERVADO",
            },
            {
                "posFila": 0,
                "posColumna": 2,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 3,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 0,
                "posColumna": 4,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 0,
                "posColumna": 5,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 0,
                "posColumna": 6,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 0,
                "posColumna": 7,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 0,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 1,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 3,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 4,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 6,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 2,
                "posColumna": 7,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 0,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 1,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 3,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 4,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 6,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 3,
                "posColumna": 7,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 0,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 1,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 3,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 4,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 6,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 4,
                "posColumna": 7,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 0,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 1,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 3,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 4,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 6,
                "estado": "LIBRE",
    
            },
            {
                "posFila": 5,
                "posColumna": 7,
                "estado": "LIBRE",
    
            }
        ]
    };
    return Promise.resolve(sala);
}

const getSalas = () => {
    // return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
    const salas = [
        {
            "tipo": "2D",
            "salas": [
                {
                    id:1,
                    nombre:"SALA1"
                },
                {
                    id:2,
                    nombre:"SALA2"
                }
            ]
        },
        {
            "tipo": "3D",
            "salas": [
                {
                    id:3,
                    nombre:"SALA3"
                }
            ]
        }
    ]
    return Promise.resolve(salas);
}

const getSeatsFromFunctionAdmin = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/admin`, {})
}

const saveLayoutSala = (sala) => {
    //return fetchWithAuthentication('POST', `${API}/sala/crear`, sala) 
    console.log(sala);
    return Promise.resolve("");
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
