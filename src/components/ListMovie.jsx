import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/MovieService';

export default function ListMovie() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies()
            .then(res => setMovies(res))
            .catch(res => res)
    },[]) 
    return (
        <Container className='mt-4'>
            <h1 style={{color: '#4bbad8'}}>Cartelera</h1>
            <p></p>
            <Row md={3} xs={1} lg={4} className="g-4">
                {
                    movies.map(movie => 
                        <Col key={movie.id}>
                            <MovieCard movie={movie}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}