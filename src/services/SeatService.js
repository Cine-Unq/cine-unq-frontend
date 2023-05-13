import { handleErrorRequestResponse, handleRequestResponse } from "./utils";
import { getToken } from "./utils";
const API = 'http://localhost:8080';


const getSeatsFromMovie = (id) => {
    const token = getToken();
    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    return fetch(`${API}/asientos/pelicula/funcion/${id}`, header)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse);
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
    return fetch(`${API}/compra`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse);
}

const getPurchase = (id) => {
    return fetch(`${API}/compra/${id}`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
        
}
export { getSeatsFromMovie, generatePurchase, getPurchase }; 
