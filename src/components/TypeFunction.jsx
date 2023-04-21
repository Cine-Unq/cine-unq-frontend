import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
export default function TypeFunction({ tipoFuncion, idMovie}) {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{tipoFuncion.tipo}</Accordion.Header>
                    <Accordion.Body>
                        <div className='list-time-function'>
                            {
                                tipoFuncion.horarios.map(funcion =>
                                    <Link className='list-time-function' key={funcion.id} to={`/movie/seats/${idMovie}/funcion/${funcion.id}`}>
                                        {funcion.horario}
                                    </Link>
                                )
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
} 