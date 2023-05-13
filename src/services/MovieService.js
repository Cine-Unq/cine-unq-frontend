import { handleErrorRequestResponse, handleRequestResponse } from "./utils";
const API = "http://localhost:8080";
import { getToken } from "./utils";
import axios from 'axios';
axios.interceptors.request.use(
    (config) => {
        const token = getToken();

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

const getMovieById = (id) => {
    return fetch(`${API}/peliculas/${id}`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
};

const getAllMovies = () => {
    const token = getToken();
    const header = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    }
    //console.log(header)
    // return axios.get(`${API}/peliculas/`)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err =>console.log(err))
    return fetch(`${API}/peliculas/`, header)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)

};

const getFunctionsOfMovie = (id) => {
    return fetch(`${API}/funcion/${id}`)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
};

export { getMovieById, getAllMovies, getFunctionsOfMovie };
