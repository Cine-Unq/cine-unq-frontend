import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import Movie from '../components/Movie';

export default function MoviePage() {
    return (
        <Container fluid style={{padding:0, margin:0}}>
            <NavBar></NavBar>
            <Movie movieId={2} ></Movie>
        </Container>
    )
}