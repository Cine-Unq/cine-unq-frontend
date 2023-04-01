const API = 'http://localhost:8080';

const getSeatsFromMovie = (id) => {
    return fetch(`${API}/asientos/pelicula/${id}`)
        .then(
            res =>
                res.json()
        )
        .catch(err => console.log(err))
    // const res = [	
    //     {
    //         "id": 1,
    //         "estaOcupado": false,
    //         "columna": "A",
    //         "fila": "1"
    //     },
    //     {
    //         "id": 2,
    //         "estaOcupado": false,
    //         "columna": "A",
    //         "fila": "2"
    //     }
    // ]
    // return Promise.resolve(res);
}

export { getSeatsFromMovie }; 
