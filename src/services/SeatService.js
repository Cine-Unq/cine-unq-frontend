import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromMovie = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
}

const generatePurchase = (seats, idFunction ) => {    
    if (!seats || seats.length == 0) {
        return Promise.reject("Para generar la compra debe seleccionar al menos 1 asiento");
    }
    const purchase = {
        idCliente: 1,
        idsAsientos: seats.map(data => data.id),
        idFuncion: idFunction
    }
    return fetchWithAuthentication('POST',`${API}/compra/`,purchase)
}

const getPurchase = (id) => {
    return fetchWithAuthentication('GET',`${API}/compra/${id}`, {})
        
}

const confirmSeats = (idCompra, idCliente, seats) => {
    const body = {
        "idCliente": idCliente,
        "idCompra": idCompra,
        "asientos": seats
    }
    return fetchWithAuthentication('POST', `${API}/asientos/pelicula/funcion/`, body)
}
export { getSeatsFromMovie, generatePurchase, getPurchase, confirmSeats }; 
