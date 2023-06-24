import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import logocine from '../assets/logocine.png'
// import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import { logout } from "../services/utils";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar({ isAdmin }) {
    const [session, setSession] = useState(true)

    const closeSession = () => {
        logout()
        setSession(false)
    }
    return (
        <>
            {!session && <Navigate to="/" replace={true} />}
            {
                !isAdmin ?
                    <Navbar collapseOnSelect expand="lg" variant="dark">
                        <Container>
                            <img
                                alt=""
                                src={logocine}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                            <Navbar.Brand style={{color:'#EBB454'}}>CINE.UNQ</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Link style={{color:'#EBB454'}} to={"/billboard/movies"} >Home</Link>
                                </Nav>
                                <Nav>
                                    <NavDropdown title={<BsFillPersonFill/>} id="collasible-nav-dropdown">
                                        <NavDropdown.Item onClick={closeSession}>cerrar sesión</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> :
                    <Navbar collapseOnSelect expand="lg" variant="dark">
                        <Container>
                            <img
                                alt=""
                                src={logocine}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                            <Navbar.Brand style={{color:'#EBB454'}}>CINE.UNQ</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Link style={{color:'#EBB454'}} to={"/panel/scanner"} >Scanner</Link>
                                    <Nav.Link/>
                                    <Link style={{color:'#EBB454'}} to={"/panel/info/peliculas/funcion"} >Funciones</Link>
                                    <Nav.Link/>
                                    <Link style={{color:'#EBB454'}} to={"/create/sala"} >Crear sala</Link>
                                    <Nav.Link/>
                                    <Link style={{color:'#EBB454'}} to={"/create/function"} >Agregar funcion</Link>
                                </Nav>
                                <Nav>
                                    <NavDropdown title={<BsFillPersonFill/>} id="collasible-nav-dropdown">
                                        <NavDropdown.Item onClick={closeSession}>Cerrar session</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 
            }
            
        </>
    )
} 