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

const createFunction = (movie,sala,time, day) => {
    const body = {pelicula:movie.id,sala:sala.id,horaInicio:`${day} ${time}`};
    console.log(body)
    return fetchWithAuthentication('POST', `${API}/funcion/`, body) 
}
export { getMovieById, getAllMovies, getFunctionsOfMovie, createFunction };
