import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { loginUser } from '../services/UserService';
import { Navigate } from "react-router-dom";

const styles = {
    font_color_title: {
        "color": "#EBB454",
        "fontSize": "30px"
    },
    font_color_label: {
        "color": "#EBB454"
    },
    button_session: {
        "width": '100%',
        "background": "#EBB454"
    },
    text_create_account: {
        "color": "white",
        "fontSize": "14px"
    },
    link_create_account: {
        "marginLeft": "5px",
        "color": "#2047D1",
        "fontSize": "15px"
    }
}
export default function Formulario() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [logged, setLogged] = useState(false);

    const handleChangeUserName = event => {
        setUsername(() => event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(() => event.target.value);
    };

    const login = () => {
        loginUser(username, password)
            .then(() => setLogged(true))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <Row className="justify-content-md-start">
                <Col className="col-md-7">
                    {logged && (
                        <Navigate to="/movie/info" replace={true} />
                    )}
                    <Form>
                        <Form.Group>
                            <Form.Label style={styles.font_color_title}>Bienvenido de vuelta</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={styles.font_color_label}>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su usuario" onChange={handleChangeUserName} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={styles.font_color_label} >Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={handleChangePassword} />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" onClick={login} style={styles.button_session}>
                                Iniciar Sesion
                            </Button>
                        </div>
                        <p></p>
                        <p style={styles.text_create_account}>
                            ¿Todavia no tenes cuenta?
                            <a href="/" style={styles.link_create_account}>
                                Crea una ahora
                            </a>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}