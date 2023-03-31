import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logocine from '../assets/logocine.png'

export default function NavBar() {
    return (
        <Navbar style={{background:"black"}}>
            <Container fluid>
                <Navbar.Brand style={{color:'white', display:'flex'}}>
                    <img
                        alt=""
                        src={logocine}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />
                    <h5 style={{color:'#EBB454', marginTop:'2rem'}}>CINE.UNQ</h5>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
} 