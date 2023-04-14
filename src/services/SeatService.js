const API = 'http://localhost:8080';

const getSeatsFromMovie = (id) => {
    return fetch(`${API}/asientos/pelicula/${id}`)
        .then(
            res =>
                res.json()
        )
        .catch(err => console.log(err));
}

const generatePurchase = (data) => {    
    if (!data || data.length == 0) {
        return Promise.reject("Para generar la compra debe seleccionar al menos 1 asiento");
    }
    const purchase = {
        idCliente: 1,
        idsAsientosComprados: data.map(data => data.id),
        idPelicula: 1
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
