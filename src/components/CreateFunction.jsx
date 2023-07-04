/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { getAllMovies } from "../services/MovieService";
import { getSalas } from "../services/SeatService";
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalConfirmCreateFunction from "./ModalConfirmCreateFunction";
import Alert from 'react-bootstrap/Alert';

export default function CreateFunction() {
    const [movies, setMovies] = useState([]);
    const [salas, setSalas] = useState([]);
    const [salaSelected, setSalaSelected] = useState([]);
    const [movieSelected, setMovieSelected] = useState([]);
    const [timeFunction, setTimeFunction] = useState(false);
    const [dateFunction, setDateFunction] = useState(false);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [msgSuccessCreate, setMsgSuccessCreate] = useState();


    useEffect(() => {
        getAllMovies().
            then(res => setMovies(res))
        getSalas().
            then(data => setSalas(data))

    }, [])
    const handleSelectMovie = (movie) => {
        let res = []; 
        movies.forEach(e => {
            if (e.id === movie.id) {
                e.active = !movie.active;
            } else {
                e.active = false;
            }
            res.push(e)
        }); 
        setMovies(res)
    }

    const handleSelectSala = (sala) => {
        let result = []; 
        salas.forEach(format => {
            let salasModify = [];
            format.salas.forEach(s => {
                if (sala.id === s.id) {
                    s.active = !sala.active;
                } else {
                    s.active = false;
                }
                salasModify.push(s);
            })
            result.push({tipo:format.tipo, salas:salasModify}); 
        })
        setSalas(result);
    }

    const createFunction = () => {
        if (!dateFunction) {
            setError("No se definio una fecha");
            return;
        }
        if (!timeFunction) {
            setError("No se definio un horario");
            return;
        }
        if (movies.filter(m => m.active).length === 0) {
            setError("No se selecciono ninguna película");
            return;
        }
        let sala = {}; 
        salas.forEach(format => {
            format.salas.forEach(s => {
                if (s.active) {
                    sala = s;
                }
            })
        })
        if (Object.keys(sala).length === 0) {
            setError("No se selecciono ninguna sala");
            return;
        }
        setSalaSelected(sala);
        setMovieSelected(movies.filter(m => m.active)[0]);
        setModal(true);
    }
    const successCreate = (msg) => {
        setMsgSuccessCreate(msg)
    }

    return (
        <div style={{display:"grid", justifyContent: 'center'}}  >
            {msgSuccessCreate ? <Alert data-testid='msg-creacion-funcion' variant='success' onClose={() => setMsgSuccessCreate(false)} dismissible> {msgSuccessCreate} </Alert>: <></>}
            {error ? <Alert  variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
            <div className="d-flex justify-content-center">

                {modal ? <ModalConfirmCreateFunction movie={movieSelected} sala={salaSelected} time={timeFunction} day={dateFunction} successCreate={successCreate} onClose={()=> setModal(false)} setErrorr={setError}/>: <></>}

                <div style={{width:400}}> 
                    <Form.Label  style={{display:"flex", justifyContent:'center',color: 'white',fontSize: 'large'}}>Día de la función</Form.Label>
                    <Form.Control data-testid='input-dia-funcion' type="date"  onChange={({target}) => setDateFunction(target.value)}/>
                    <br></br>
                    <Form.Label  style={{display:"flex", justifyContent:'center',color: 'white',fontSize: 'large'}}>Hora de la función</Form.Label>
                    <Form.Control data-testid='input-horario-funcion' type="time"  onChange={({target}) => setTimeFunction(target.value)}/>
                    <br></br>
                    <Form.Label style={{display:"flex", justifyContent:'center',color:'white',fontSize: 'large'}}>Seleccione una película</Form.Label>
                    <ListGroup>
                        {
                            movies.map((m) => {
                           
                                return (
                                    <ListGroup.Item data-testid='seleccion-pelicula' key={m.id} action active={m.active} onClick={() => handleSelectMovie(m)}>
                                        {m.nombre}
                                    </ListGroup.Item> 
                                )
                            })
                        }
                    </ListGroup>
                    <br></br>
                    <Form.Label style={{display:"flex", justifyContent:'center',color:'white',fontSize: 'large'}}> Seleccione una sala</Form.Label>
                    {
                        salas.map((s,index) => {
                            return (
                                <Accordion key={index} data-testid="seleccion-formato-funcion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header >{s.tipo}</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup>
                                                {
                                                    s.salas.map((m) => {
                           
                                                        return (
                                                            <ListGroup.Item data-testid='seleccion-sala' key={m.id} action active={m.active} onClick={() => {
                                                                handleSelectSala(m)
                                                            }}>
                                                                {m.nombre}
                                                            </ListGroup.Item> 
                                                        )
                                                    })
                                                }
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )
                        })
                    }
                    <br></br>
                    <div style={{display:"flex", justifyContent:'center'}}>
                        <Button data-testid='crear-funcion' variant="primary" onClick={createFunction} >
                    Crear función
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
} 