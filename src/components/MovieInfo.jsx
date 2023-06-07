import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/MovieService';
import { useParams } from 'react-router-dom';
import FunctionAvailable from './FunctionsAvailable';
import PopUpError from './PopupError';

export default function MovieInfo() {
    const [movie, setMovie] = useState(null);
    const { idMovie }= useParams();
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");
    useEffect(()=>{
        getMovieById(idMovie)
            .then(data => {
                setMovie(data)
            })
            .catch(err => {
                setTextError(err.message);
                setShowError(true)
            })
    },[]);

    return (
        <>
            {showError && <PopUpError body={textError} />}
            { movie &&
                (<Container fluid='sm'>
                    <Row className="justify-content-md-center">
                        <Col md={8} >
                            <div style={{display: 'flex', justifyContent: 'center'}} >
                                <Image fluid={true} rounded={true} src={movie.imagen} style={{width:350, height: 500}}></Image>
                            </div>
                        </Col>
                    </Row>
                    <p></p>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' md={8} >
                            <h1 style={{ color:'#4bbad8' }}>{movie.nombre}</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' md={8} >
                            <p style={{ color: '#FFFFFF' }}>{movie.descripcion}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" >
                        <Col  md={8}>
                            <h3 style={{ color:'#EBB454' }}>Funciones disponibles</h3>
                            <FunctionAvailable movieId={idMovie} ></FunctionAvailable>
                        </Col>
                    </Row>
                </Container>)
            }
        </>
    )
}