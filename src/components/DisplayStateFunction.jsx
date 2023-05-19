import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import DisplayStateSeats from './DisplayStateSeats';
export default function DisplayStateFunction() {

    const [movies, setMovies] = useState([]);
    const [functions, setFuntions] = useState([]);
    const [displaySeats, setDisplaySeats] = useState(false);
    useEffect(() => {
        const data = [
            {
                "id": 1,
                "nombre": "The Avengers",
                "active":false
            },
            {
                "id": 2,
                "nombre": "John Wick",
                "active":false
            },
            {
                "id": 3,
                "nombre": "Evil Dead",
                "active":false
            },
            {
                "id": 4,
                "nombre": "Bastardos sin gloria",
                "active":false
            },
            {
                "id": 5,
                "nombre": "El Padrino",
                "active":false
            }
        ]
        setMovies(data)
    }, [])

    const handleSelectMovie = (movie) => {
        let res = []; 
        movies.forEach(e => {
            if (e.id === movie.id) {
                e.active = !movie.active;
                if (e.active) {
                    displayFunctions(e);
                } else {
                    notDisplayFuncionts(e);
                }
            } else {
                e.active = false;
            }
            res.push(e)
        }); 
        setMovies(res)
    }

    const displayFunctions = () => {
        let data = [
            {
                "tipo": "3D",
                "horarios": [
                    {
                        "id": 3,
                        "horario": "18:26"
                    }
                ],
                "active":false

            },
            {
                "tipo": "2D",
                "horarios": [
                    {
                        "id": 1,
                        "horario": "14:26"
                    }
                ],
                "active":false
            }
        ]
        let res = [];
        data.forEach(d => {
            const funcs = d.horarios.map(horario => ({id: horario.id, funcion: `${horario.horario} - ${d.tipo}`, active:false}));
            res = res.concat(funcs)
        })
        setFuntions(res);
    }

    const notDisplayFuncionts = () => {
        setFuntions([]);
        notDisplaySeat(false);
    }

    const handleSelectFunction = (func) => {
        let res = []; 
        functions.forEach(f => {
            if (f.id === func.id) {
                f.active = !func.active;
                if (f.active) {
                    displaySeatsOfFunction(f);
                } else {
                    notDisplaySeat();
                }
            } else {
                f.active = false;
            }
            res.push(f);
        }); 
        setFuntions(res);
    }

    const displaySeatsOfFunction = (func) => {
        console.log(func)
        const idMovie = movies.filter(m => m.active)[0].id;
        const idFunction = functions.filter(f => f.active)[0].id;
        setDisplaySeats({idMovie,idFunction}); 
    }

    const notDisplaySeat = () => {
        setDisplaySeats(false); 
    }

    return (
        <>
            <h3 style={{textAlign: 'center', color: 'white'}}>Seleccione una pelicula y funcion para ver su estado</h3>
            <p></p>
            <div className="d-flex justify-content-center">
                <div style={{width:400}}>
                    {movies.length > 0 ? <h3 style={{textAlign: 'center', color: 'white'}}>Peliculas</h3>:<></>}
                    <ListGroup >
                        {
                            movies.map((m) => {
                           
                                return (
                                    <ListGroup.Item key={m.id} action active={m.active} onClick={() => handleSelectMovie(m)}>
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
                                    <ListGroup.Item key={f.id} action active={f.active} onClick={() => handleSelectFunction(f)}>
                                        {f.funcion}
                                    </ListGroup.Item> 
                                )
                            })
                        }
                    </ListGroup>
                </div>
            </div>
            <p></p>
            {displaySeats && <DisplayStateSeats info={displaySeats}/>}
        </>
    );
}