const API = "http://localhost:8080";

const getMovieById = (id) => {
    return fetch(`${API}/peliculas/${id}`)
        .then((res) => res.json())
        .catch((err) => err);
};

const getAllMovies = () => {
    return fetch(`${API}/peliculas`)
        .then((res) => res.json())
        .catch((err) => err);
};

const getFunctionsOfMovie = (id) => {
    return fetch(`${API}/funcion/${id}`)
        .then((res) => res.json())
        .catch((err) => err);
    // const result = [
    //     {
    //         "tipo": "2D",
    //         "horarios": [
    //             {
    //                 id:1,
    //                 horario: "12:30"
    //             },
    //             {
    //                 id:2,
    //                 horario: "16:30"
    //             }
    //         ],
    //     },
    //     {
    //         "tipo": "3D",
    //         "horarios": [
    //             {
    //                 id:3,
    //                 horario: "19:30"
    //             },
    //             {
    //                 id:2,
    //                 horario: "22:30"
    //             }
    //         ]
    //     }
    // ]
    // return Promise.resolve(result)
};

export { getMovieById, getAllMovies, getFunctionsOfMovie };
