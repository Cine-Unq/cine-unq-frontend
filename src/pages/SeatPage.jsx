// import Container from 'react-bootstrap/Container';
import ContainerCinema from '../components/ContainerCinema';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

export default function SeatPage() {
    const { idFunction }= useParams();
    return (
        <div data-testid='pagina-de-asientos'>
            <NavBar isAdmin={false}></NavBar>
            <div>
                <ContainerCinema idFunction = {idFunction}></ContainerCinema>
            </div>
        </div>
    );
}