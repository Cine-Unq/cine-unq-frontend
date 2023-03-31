const API = 'http://localhost:8080';

const getMovieById = (id) => {
    return fetch(`${API}/peliculas/${id}`)
        .then(
            res =>
                res.json()
        )
        .catch(err => err)
}

export { getMovieById }; 