import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Seat from './Seat';
export default function Cinema() {
    return (
        <Container fluid='sm'>
            <Row className="justify-content-md-center" md={10}>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
                <Col >
                    <Seat></Seat>
                </Col>
            </Row>
        </Container>
    );
}