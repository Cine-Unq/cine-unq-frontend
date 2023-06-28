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
    const [tipoSala, setTipoSala] = useState(false);
    const [nameSala, setNameSala] = useState(false);
    const [msgSalaSaveSuccessful, setMsgSalaSaveSuccessful] = useState(false);

    const createMatrix = () => {
        if (cantColumns  > 0 && cantColumns  < 30 && cantRows > 0 && cantRows < 30) {
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
            setError("La cantidad de filas y columnas debe estar entre el rando de 1 y 30")
        }
    }
    const saveSala = () => {
        if (!nameSala) {
            setError("Se debe definir un nombre para la sala");
        } else if (!tipoSala) {
            setError("Se debe definir el tipo de la sala");
        } else if (matrix.length > 0 || matrix.flat(1).filter(s => s.active).length === 0) {
            const rows = matrix.length;
            const columns = matrix[0].length;
            const seats = matrix.flat(1).filter(s => s.active).map(seat => ({fila:seat.fila,columna:seat.columna}))
            saveLayoutSala({rows,columns,seats, name: nameSala, tipoSala})
                .then(() => setMsgSalaSaveSuccessful("Se guardo correctamente la sala"))
                .catch(() => setError("No se pudo guardar la sala creada"));
        }else {
            setError("No se puede guardar una sala donde no hay definidos asientos")
        }
    }
    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            {error ? <Alert variant='danger' onClose={() => setError(false)} dismissible> {error} </Alert>: <></>}
            {msgSalaSaveSuccessful ? <Alert data-testid='msg-sala-creada' variant='success' onClose={() => setMsgSalaSaveSuccessful(false)} dismissible> {msgSalaSaveSuccessful} </Alert>: <></>}
            <div style={{display: 'grid', justifyItems: 'center'}}>
                <Form.Label style={{color: 'white', fontSize:'large'}}>Nombre de la Sala</Form.Label>
                <Form.Control data-testid='input-nombre-sala' type="email" placeholder="Ingrese un nombre" onChange={({target}) => setNameSala(target.value)} autoComplete="on" />
                <p></p>
                <Form.Label style={{color: 'white', fontSize:'large'}}>Tipo Sala</Form.Label>
                <Form.Select data-testid='input-formato-sala' aria-label="Default select example" onChange={({target})=>setTipoSala(target.value)}>
                    <option value="">Seleccionar un tipo de formato</option>
                    <option value="2D">2D</option>
                    <option value="3D">3D</option>
                    <option value="4D">4D</option>
                </Form.Select>
                <p></p>
                <Form.Label style={{color: 'white', fontSize:'large'}}>Cantidad de Filas</Form.Label>
                <Form.Control data-testid='input-cantidad-filas' type="number" min="1" max="25" placeholder="Ingrese cantidad de filas" onChange={({target}) => setCantRows(target.value)} autoComplete="on" />
                <p></p>
                <Form.Label style={{color: 'white', fontSize:'large'}}>Cantidad de Columnas </Form.Label>
                <Form.Control data-testid='input-cantidad-columnas' type="number" min="1" max="25" placeholder="Ingrese cantidad de columnas" onChange={({target}) => setCantColumns(target.value)} autoComplete="on" />
                <br></br>
            </div>
            <div style={{display:'flex'}}>
                <Button data-testid='boton-crear-sala' variant="primary" onClick={createMatrix} >
                Crear sala
                </Button>
                <span style={{width:10}}></span>
                <Button variant="secondary" onClick={()=>setMatrix([])} >
                Borrar sala
                </Button>
            </div>
            <br></br>
            <CreateLayout matrix={matrix} updateMatrix={setMatrix}/>
            <br></br>
            {
                matrix.length < 1?
                    <></>
                    :
                    <Button data-testid='boton-guardar-sala' variant="primary" onClick={saveSala} >
                        Guardar Sala creada
                    </Button>
            }
        </div>
    )
}