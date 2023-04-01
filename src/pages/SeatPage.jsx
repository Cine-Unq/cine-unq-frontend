// import Container from 'react-bootstrap/Container';
import CinemaMovie from '../components/CinemaMovie';
import NavBar from '../components/NavBar';

export default function SeatPage() {
    return (
        <>
            <NavBar></NavBar>
            <div>
                <CinemaMovie></CinemaMovie>
            </div>
        </>
    );
}