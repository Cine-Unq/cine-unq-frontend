import { useState, useEffect } from 'react';
import { getFunctionsOfMovie } from '../services/MovieService';
import TypeFunction from './TypeFunction';
export default function FunctiosAvailable({ movieId }) {
    const [typeFunctions, setTypeFunctions] = useState([]);

    useEffect(() => {
        getFunctionsOfMovie(movieId)
            .then(res => setTypeFunctions(res))
            .catch(err => err)
    },[]) 
    return (
        <>
            {typeFunctions.length == 0 && <p style={{color: 'white'}}> No hay funciones disponibles para esta pelicula. </p>} 
            {
                typeFunctions.map((typeFunction, i) => <TypeFunction key={i} tipoFuncion={typeFunction} idMovie={movieId}/>)
            }
        </>
    )
}