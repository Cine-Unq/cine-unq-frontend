import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import MovieInfo from '../components/MovieInfo';

export default function MoviePage() {
    return (
        <Container fluid style={{padding:0, margin:0}}>
            <NavBar isAdmin={false}></NavBar>
            <MovieInfo ></MovieInfo>
        </Container>
    )
}