import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logocine from '../assets/logocine.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import { logout } from "../services/utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";


export default function NavBar() {
    const [session, setSession] = useState(true)

    const closeSession = () => {
        logout()
        setSession(false)
    }
    return (
        <>
            {!session && <Navigate to="/" replace={true} />}
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
                    <Dropdown align={"end"}>
                        <Dropdown.Toggle variant="success">
                            <BsFillPersonFill/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={closeSession}>Cerrra sesion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>    
                </Container>
            </Navbar>
        </>
    )
} 