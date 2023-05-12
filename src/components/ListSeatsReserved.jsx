import Card from 'react-bootstrap/Card';
import seat from '../assets/seat-cinema.png';
export default function ListSeatsReserved() {
    return (
        <>
            <p></p>
            <h2 style={{textAlign: 'center'}}>Pelicula : Titanic</h2>
            <h2 style={{textAlign: 'center'}}>Funcion : 12:30</h2>
            <h2 style={{textAlign: 'center'}}>Asientos reservados :</h2>
            <div className="d-flex justify-content-center">
                <ul className="confirmacion">
                    <li>
                        <span className="seat"/> <small>Sin confirmar</small>
                    </li>
                    <li>
                        <span className="seat" style={{background:'green'}}/> <small>Confirmado</small>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-center">
                <div style={{width:200, color:'Black'}}>
                    <Card style={{background:'green'}}>
                        <Card.Img variant="top" src={seat} />
                        <Card.Body>
                            <Card.Title>Asiento F1 C2</Card.Title>
                        </Card.Body>
                    </Card>
                    <p></p>
                    <Card >
                        <Card.Img variant="top" src={seat} />
                        <Card.Body>
                            <Card.Title>Asiento F1 C2</Card.Title>
                        </Card.Body>
                    </Card>
                    <p></p>
                    <Card >
                        <Card.Img variant="top" src={seat} />
                        <Card.Body>
                            <Card.Title>Asiento F1 C2</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
                
    )
}