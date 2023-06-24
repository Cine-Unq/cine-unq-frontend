import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import CreateLayout from './CreateLayout';
import Alert from 'react-bootstrap/Alert';
import { saveLayoutSala } from '../services/SeatService';

export default function CreateSala() {
    const [matrix,setMatrix] = useState([]);
    const [cantColumns, setCantColumns] = useState(0);
    const [cantRows, setCantRows] = useState(0);
    const [error, setError] = useState(false);
    const [msgSalaSaveSuccessful, setMsgSalaSaveSuccessful] = useState(false);

    const createMatrix = () => {
        if (cantColumns  > 0 && cantRows > 0) {
            let matriz = [];
            let contador = 0;
            for(let f=0; f < cantRows; f++) {
                matriz.push([]);
                for(let c=0; c < cantColumns; c++) {
                    matriz[f][c] = {
                        fila: f,
                        columna: c,
                        id:contador,
                        active: true
                    }
                    contador++;  
                }
            }
            setMatrix(matriz);
        } else {
            setError("La cantidad de filas y columnas no pueden ser menor a 0")
        }
    }
    const saveSala = () => {
        if (matrix.length > 0 || matrix.flat(1).filter(s => s.active).length === 0) {
            const rows = matrix.length;
            const columns = matrix[0].length;
            const seats = matrix.flat(1).filter(s => s.active)
            saveLayoutSala({rows,columns,seats})
                .then(() => setMsgSalaSaveSuccessful("Se guardo correctamente la sala"))
                .catch(() => setError("No se pudo guardar la sala creada"));
        } else {
            setError("No se puede guardar una sala donde no hay definidos asientos")
        }
    }
    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
            {msgSalaSaveSuccessful ? <Alert variant='success' onClose={() => setMsgSalaSaveSuccessful(false)} dismissible> {msgSalaSaveSuccessful} </Alert>: <></>}
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <Form.Label style={{color: 'white'}}>Cantidad de Filas</Form.Label>
                <Form.Control type="email" placeholder="Ingrese cantidad de filas" onChange={({target}) => setCantRows(target.value)} autoComplete="on" />
                <Form.Label style={{color: 'white'}}>Cantidad de Columnas </Form.Label>
                <Form.Control type="email" placeholder="Ingrese cantidad de columnas" onChange={({target}) => setCantColumns(target.value)} autoComplete="on" />
                <br></br>
            </div>
            <Button variant="primary" onClick={createMatrix} >
                Crear sala
            </Button>
            <br></br>
            <Button variant="secondary" onClick={()=>setMatrix([])} >
                Borrar sala
            </Button>
            <br></br>
            <CreateLayout matrix={matrix} updateMatrix={setMatrix}/>
            <br></br>
            {
                matrix.length < 1?
                    <></>
                    :
                    <Button variant="primary" onClick={saveSala} >
                        Guardar Sala creada
                    </Button>
            }
        </div>
    )
}