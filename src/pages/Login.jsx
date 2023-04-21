import Formulario from '../components/FormLogin';
import Logo from '../components/Logo';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const styles = {
    margin_top_height_login: {
        "height": "11rem"
    }
}
export default function Login() {
    return (
        <Container>
            <div style={styles.margin_top_height_login}></div>
            <Row >
                <Col>
                    <Logo></Logo>
                </Col>
                <Col style={{"marginTop": "40px"}}>
                    <Formulario/>
                </Col>
            </Row>
        </Container>
    )
}