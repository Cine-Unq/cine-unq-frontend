import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import PopUpError from './PopupError';
import ListSeatsReserved from './ListSeatsReserved';

export default function Scanner() {
    // const [data, setData] = useState('No result');
    const [displayScanner, setDisplayScanner] = useState(false);
    // const [showError, setShowError] = useState(false);
    // const [textError, setTextError] = useState("");
    const [displayReservation, setDisplayReservation ] = useState(false); 
    const handleScan = (result, error) => {
        if (error) {
            // setDisplayScanner(false)
            // setShowError(true),
            // setTextError(error)
            console.info("error del scanner " + error);
        }
        if (result) {
            if (result.text) {
                console.log(result.text);
                setDisplayReservation(true);
                setDisplayScanner(false)
            }

        }
    }
    return (
        <>
            {/* <PopUpError showPopupError={showError} body={textError} /> */}
            <Container fluid='sm' style={{color:"white"}}>
                <Row className="justify-content-md-center">
                    <Col>
                        <h1 style={{textAlign: 'center'}}>Scanner</h1>
                    </Col>
                </Row>              
                {  !displayScanner ?
                    <Row className="justify-content-md-center">
                        <Col>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" onClick={() => setDisplayScanner(true)}> Scanear QR</Button>
                            </div>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <Button variant="secondary" onClick={() => setDisplayScanner(false)}> Cancelar</Button>
                            </div>
                            <p></p>
                            <div style={{background:'white', margin: 10, padding: 10, maxWidth: 500, maxHeight: 500}}>
                                <QrReader
                                    scanDelay={3000}
                                    onResult={handleScan}
                                />
                            </div>
                        </Col>
                    </Row>
                }
                {   displayReservation ?
                    <> 
                        <Row>
                            <Col>
                                <ListSeatsReserved></ListSeatsReserved>
                            </Col>
                        </Row>
                    </>
                    : <></>
                }
            </Container>
        </>
    );
}