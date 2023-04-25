const API = "http://localhost:8080";

const handleRequestResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json()
        .then(res => Promise.reject(res))
}

const getMovieById = (id) => {
    return fetch(`${API}/peliculas/${id}`)
        .then(handleRequestResponse)
        .catch(() => Promise.reject({message: '500 Internal Server Error' }))
};

const getAllMovies = () => {
    return fetch(`${API}/peliculas`)
        .then(handleRequestResponse)
        .catch(() => Promise.reject({message: '500 Internal Server Error' }))

};

const getFunctionsOfMovie = (id) => {
    return fetch(`${API}/funcion/${id}`)
        .then(handleRequestResponse)
        .catch(() => Promise.reject({message: '500 Internal Server Error' }))
};

export { getMovieById, getAllMovies, getFunctionsOfMovie };
