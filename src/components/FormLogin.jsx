import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { loginUser } from '../services/UserService';
import { Navigate } from "react-router-dom";
import { login, isAdmin} from '../services/utils';
import Alert from 'react-bootstrap/Alert';

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
    const [error, setError] = useState(false);
    const [isRolAdmin, setIsRolAdmin] = useState(false);
    const handleChangeUserName = event => {
        setUsername(() => event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(() => event.target.value);
    };

    const handleLogin = () => {
        loginUser(username, password)
            .then(({ accessToken }) => {
                login(accessToken);
                const admin = isAdmin();
                setLogged(true)
                setIsRolAdmin(admin)
            })
            .catch(err => setError(err))
    }
    return (
        <Container>
            <Row className="justify-content-md-start">
                <Col className="col-md-7">
                    { 
                        logged ?  
                            isRolAdmin ? <Navigate to="/panel/scanner" replace={true}/>:                         
                                <Navigate to="/billboard/movies" replace={true} />
                            :<></>
                    }
                    {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error.message} </Alert>: <></>}
                    <Form>
                        <Form.Group>
                            <Form.Label style={styles.font_color_title}>Bienvenido de vuelta</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={styles.font_color_label}>Usuario</Form.Label>
                            <Form.Control data-testid="input-usuario" type="email" placeholder="Ingrese su usuario" onChange={handleChangeUserName} autoComplete="on" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={styles.font_color_label} >Contraseña</Form.Label>
                            <Form.Control data-testid="input-contrasenia" type="password" placeholder="Ingrese su contraseña" onChange={handleChangePassword} autoComplete="on"/>
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button data-testid="boton-sesion" variant="primary" onClick={handleLogin} style={styles.button_session}>
                                Iniciar Sesion
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}