import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../services/MovieService';
import PopUpError from './PopupError';

export default function ListMovie() {

    const [movies, setMovies] = useState([])
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");

    useEffect(() => {
        getAllMovies()
            .then(res => setMovies(res))
            .catch(err => {
                setTextError(err.message);
                setShowError(true)
            })
    },[]) 
    return (
        <>
            { showError && <PopUpError body={textError} />}
            { movies.length > 0 && <Container className='mt-4'>
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
            </Container>}
        </>
    )
}