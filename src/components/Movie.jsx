import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Movie() {
    return (
        <Container fluid='sm'>
            <Row className="justify-content-md-center">
                <Col xs='auto' md={8} >
                    <Image fluid={true} rounded={true} src="https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg"></Image>
                </Col>
            </Row>
            <p></p>
            <Row className="justify-content-md-center">
                <Col xs='auto' md={8} >
                    <h1 style={{ color: '#752477' }}>Jonh Wick 4</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs='auto' md={8} >
                    <p style={{ color: '#FFFFFF' }}>John Wick (Keanu Reeves) descubre un camino para derrotar a The High Table. Pero antes de poder ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos. </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs='auto' sm='auto' md='auto' >
                    <Button variant="secondary" size="lg" onClick={()=> {}}>
                        Ver asientos disponibles
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}