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

const createFunction = (movie,sala,time) => {
    //return fetchWithAuthentication('POST', `${API}/funcion/crear`, body) 
    const body = {movie:movie.id,sala:sala.id,time};
    console.log(body);
    return Promise.resolve(""); 
}
export { getMovieById, getAllMovies, getFunctionsOfMovie, createFunction };
