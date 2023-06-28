import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
export default function TypeFunction({ tipoFuncion, idMovie}) {
    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header data-testid='tipo-funcion'>{tipoFuncion.tipo}</Accordion.Header>
                <Accordion.Body>
                    <div className='list-time-function'>
                        {
                            tipoFuncion.horarios.map(funcion =>
                                <Link data-testid='horario-funcion' className='list-time-function' key={funcion.id} to={`/movie/seats/${idMovie}/funcion/${funcion.id}`}>
                                    {funcion.horario}
                                </Link>
                            )
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
} 