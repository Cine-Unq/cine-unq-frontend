import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/MovieService';
import { Navigate } from 'react-router-dom';

export default function Movie(props) {
    const [movie, setMovie] = useState(null);
    const [navigate, setNavigate] = useState(null);
    useEffect(()=>{
        getMovieById(props.movieId)
            .then(data => {
                setMovie(data)
            })
            .catch(err => console.log(err))
            
    },[]);

    const displaySeats = () => {
        setNavigate(true);
    };
    return (
        <>
            {navigate && <Navigate to="/movie/seats/" replace={true}/>}
            { movie &&
                (<Container fluid='sm'>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' md={3} >
                            <Image fluid={true} rounded={true} src={movie.imagen}></Image>
                        </Col>
                    </Row>
                    <p></p>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' md={8} >
                            <h1 style={{ color: '#752477' }}>{movie.nombre}</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' md={8} >
                            <p style={{ color: '#FFFFFF' }}>{movie.descripcion}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs='auto' sm='auto' md='auto' >
                            <Button variant="primary" size="lg" onClick={displaySeats}>
                                Ver asientos disponibles
                            </Button>
                        </Col>
                    </Row>
                </Container>)
            }
        </>
    )
}