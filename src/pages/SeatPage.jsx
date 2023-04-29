// import Container from 'react-bootstrap/Container';
import CinemaMovie from '../components/CinemaMovie';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

export default function SeatPage() {
    const { idFunction }= useParams();
    return (
        <>
            <NavBar></NavBar>
            <div>
                <CinemaMovie idFunction = {idFunction}></CinemaMovie>
            </div>
        </>
    );
}