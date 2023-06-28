import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import DisplayStateSeats from './DisplayStateSeats';
import { getAllMovies, getFunctionsOfMovie } from '../services/MovieService';
export default function DisplayStateFunction() {

    const [movies, setMovies] = useState([]);
    const [functions, setFuntions] = useState([]);
    const [displaySeats, setDisplaySeats] = useState(false);
    useEffect(() => {
        getAllMovies().
            then(res => setMovies(res))
    }, [])

    const handleSelectMovie = (movie) => {
        setFuntions([])
        setDisplaySeats(false)
        let res = []; 
        movies.forEach(e => {
            if (e.id === movie.id) {
                e.active = !movie.active;
                if (e.active) {
                    displayFunctions(e.id);
                } 
            } else {
                e.active = false;
            }
            res.push(e)
        }); 
        setMovies(res)
    }

    const displayFunctions = (movie) => {
        getFunctionsOfMovie(movie).
            then(data => {
                let res = [];
                data.forEach(d => {
                    const funcs = d.horarios.map(horario => ({id: horario.id, funcion: `${horario.horario} - ${d.tipo}`, active:false}));
                    res = res.concat(funcs)
                })
                setFuntions(res);
            })
    }

    const handleSelectFunction = (func) => {
        setDisplaySeats(false)
        let res = []; 
        functions.forEach(f => {
            if (f.id === func.id) {
                f.active = !func.active;
            } else {
                f.active = false;
            }
            res.push(f);
        }); 
        const functionActive = res.filter(r => r.active)
        if (functionActive.length === 1) {
            setDisplaySeats({idFunction:functionActive[0].id}); 
        }
        setFuntions(res);
    }

    return (
        <>
            <h3 style={{textAlign: 'center', color: 'white'}}>Seleccione una pelicula y funcion para ver su estado</h3>
            <p></p>
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <div style={{width:400}}>
                    {movies.length > 0 ? <h3 style={{textAlign: 'center', color: 'white'}}>Peliculas</h3>:<></>}
                    <ListGroup >
                        {
                            movies.map((m) => {
                           
                                return (
                                    <ListGroup.Item data-testid='seleccion-pelicula-item' key={m.id} action active={m.active} onClick={() => handleSelectMovie(m)}>
                                        {m.nombre}
                                    </ListGroup.Item> 
                                )
                            })
                        }
                    </ListGroup>
                    <p></p>
                    {functions.length > 0 ? <h3 style={{textAlign: 'center', color: 'white'}}>Funciones</h3>:<></>}
                    <ListGroup >
                        {
                            functions.map((f) => {
                                return (
                                    <ListGroup.Item data-testid='seleccion-function-item' key={f.id} action active={f.active} onClick={() => handleSelectFunction(f)}>
                                        {f.funcion}
                                    </ListGroup.Item> 
                                )
                            })
                        }
                    </ListGroup>
                </div>
                <p></p>
                {displaySeats && <DisplayStateSeats info={displaySeats}/>}
            </div>
        </>
    );
}