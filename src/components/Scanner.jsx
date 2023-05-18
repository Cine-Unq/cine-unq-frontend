import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';

// import PopUpError from './PopupError';

export default function Scanner() {
    // const [data, setData] = useState('No result');
    const [displayScanner, setDisplayScanner] = useState(false);
    const [navigate, setNavigate] = useState(false);

    // const [showError, setShowError] = useState(false);
    // const [textError, setTextError] = useState("");
    const validateQR = (qr) => {
        try {
            const data = JSON.parse(qr)
            return Object.hasOwn(data, 'compra')            
        } catch (error) {
            return false
        }
    } 
    const handleScan = (result, error) => {
        if (error) {
            // setDisplayScanner(false)
            // setShowError(true),
            // setTextError(error)
            console.info("error del scanner " + error);
        }
        if (result) {
            if (validateQR(result.text)) {
                console.log("si valido qr")
                setDisplayScanner(false)
                setNavigate(JSON.parse(result.text).compra)
            } else {
                setDisplayScanner(false)
                console.log("qr invalido"+ result)
            }
        }
    }
    return (
        <>
            {/* <PopUpError showPopupError={showError} body={textError} /> */}
            {navigate &&  <Navigate to={`/panel/info/purchase/${navigate}`} replace={true}/>}
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
            </Container>
        </>
    );
}