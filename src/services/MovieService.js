import { handleErrorRequestResponse, handleRequestResponse } from "./utils";
const API = "http://localhost:8080";


const getMovieById = (id) => {
    return fetch(`${API}/peliculas/${id}`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
};

const getAllMovies = () => {
    return fetch(`${API}/peliculas`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)

};

const getFunctionsOfMovie = (id) => {
    return fetch(`${API}/funcion/${id}`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
};

export { getMovieById, getAllMovies, getFunctionsOfMovie };
