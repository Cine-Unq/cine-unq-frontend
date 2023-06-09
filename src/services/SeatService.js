import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromFunction = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
}

const getSeatsFromFunctionAdmin = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/admin`, {})
}


const confirmSeats = (idCompra, idCliente, seats) => {
    const body = {
        "idCliente": idCliente,
        "idCompra": idCompra,
        "asientos": seats.map(s => s.id)
    }
    return fetchWithAuthentication('POST', `${API}/asientos/pelicula/funcion`, body)
}
export { getSeatsFromFunction, confirmSeats, getSeatsFromFunctionAdmin }; 
