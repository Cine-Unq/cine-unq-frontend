import { fetchWithAuthentication } from "./utils";
const API = 'http://localhost:8080';

const getPurchase = (id) => {
    return fetchWithAuthentication('GET',`${API}/compra/${id}`, {})
}

const generateCompraMP = (seats, idFunction ) => {    
    if (!seats || seats.length == 0) {
        return Promise.reject("Para generar la compra debe seleccionar al menos 1 asiento");
    }
    const purchase = {
        idCliente: 1,
        idsAsientos: seats.map(data => data.id),
        idFuncion: idFunction
    }
    return fetchWithAuthentication('POST',`${API}/mp/createAndRedirect`,purchase)
}

const confirmPayedPurchase = (id) => {
    return fetchWithAuthentication('PUT',`${API}/compra/${id}`, {})
}
export { getPurchase, generateCompraMP, confirmPayedPurchase }