import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/MovieService';

export default function Movie(props) {
    const [movie, setMovie] = useState(null);
    useEffect(()=>{
        getMovieById(props.movieId)
            .then(data => setMovie(data))
            .catch(err => console.log(err))
            
    },[]);
    return (
        <>
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
                            <Button variant="secondary" size="lg" onClick={()=> {}}>
                                Ver asientos disponibles
                            </Button>
                        </Col>
                    </Row>
                </Container>)
            }
        </>
    )
}