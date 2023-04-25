const API = 'http://localhost:8080';

const getSeatsFromMovie = (id) => {
    return fetch(`${API}/asientos/pelicula/funcion/${id}`)
        .then(
            res =>
                res.json()
        )
        .catch(err => console.log(err));
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
        .then(res => res.json());
}

const getPurchase = (id) => {
    return fetch(`${API}/compra/${id}`)
        .then(
            res =>
                res.json()
        )
        
}
export { getSeatsFromMovie, generatePurchase, getPurchase }; 
