import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import Cinema from '../components/Cinema';
// import RowSeat from "../components/RowSeat";

export default function SeatPage() {
    return (
        <>
            <Container fluid style={{padding:0, margin:0}}>
                <NavBar></NavBar>
                <Cinema></Cinema>
            </Container>        

        </>
    );
}