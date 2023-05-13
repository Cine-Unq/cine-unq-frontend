import { fetchWithAuthentication } from "./utils";
const API = "http://localhost:8080";
 
const getMovieById = (id) => {
    return fetchWithAuthentication('GET',`${API}/peliculas/${id}`, {})
};

const getAllMovies = () => {
    return fetchWithAuthentication('GET',`${API}/peliculas/`, {})
};

const getFunctionsOfMovie = (id) => {
    return fetchWithAuthentication('GET',`${API}/funcion/${id}`, {})
};

export { getMovieById, getAllMovies, getFunctionsOfMovie };
