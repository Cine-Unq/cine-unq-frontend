import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromFunction = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/`, {})
}

const getSeatsFromFunctionAdmin = (id) => {
    return fetchWithAuthentication('GET', `${API}/asientos/pelicula/funcion/${id}/admin`, {})
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
        "asientos": seats.map(s => s.id)
    }
    return fetchWithAuthentication('POST', `${API}/asientos/pelicula/funcion`, body)
}
export { getSeatsFromFunction, generatePurchase, getPurchase, confirmSeats, getSeatsFromFunctionAdmin }; 
