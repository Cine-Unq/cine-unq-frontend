import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function Ejemplo() {
    const [matrix,setMatrix] = useState([]);
    const [cantColumns, setCantColumns] = useState(0);
    const [cantRows, setCantRows] = useState(0);

    const createMatrix = () => {
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
    }

    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            <Form.Label style={{color: 'white'}}>Cantidad de Filas</Form.Label>
            <Form.Control data-testid="input-usuario" type="email" placeholder="Ingrese su usuario" onChange={({target}) => setCantRows(target.value)} autoComplete="on" />
            <Form.Label style={{color: 'white'}}>Cantidad de Columnas </Form.Label>
            <Form.Control data-testid="input-usuario" type="email" placeholder="Ingrese su usuario" onChange={({target}) => setCantColumns(target.value)} autoComplete="on" />
            <br></br>
            <Button data-testid="boton-sesion" variant="primary" onClick={createMatrix} >
                Crear layout
            </Button>
            <br></br>
            <LayoutSeat matrix={matrix} updateMatrix={setMatrix}/>
            <br></br>
            <Button data-testid="boton-sesion" variant="primary" onClick={()=>console.log(matrix)} >
                Guardar layout de Sala
            </Button>
        </div>
    )
}

const LayoutSeat = ({matrix, updateMatrix}) => {
    const changeStateSeat = (seat) => {
        let newMatrix = []
        for(let f=0; f < matrix.length; f++) {
            newMatrix.push([]);
            for(let c=0; c <  matrix[0].length; c++) {
                if (matrix[f][c].id === seat.id) {
                    const { id, fila, columna, active } = seat;
                    const state = !active;
                    newMatrix[f][c] = { id:id, fila:fila, columna:columna, active:state};
                } else {
                    newMatrix[f][c] = matrix[f][c];
                }
            }
        }
        updateMatrix(newMatrix)
    }
    const renderSeats = () => {
        let cantColumns = 1
        let cantRows = 1
        if ( matrix.length > 0) {
            cantColumns = matrix[0].length;
            cantRows = matrix.length;
        }
        let layout = {
            display: 'grid',
            gridTemplateColumns: `repeat(${cantColumns}, 1fr)`,
            gridTemplateRows: `repeat(${cantRows}, 1fr)`,
            gridColumnGap: 2,
            gridRowGap: 4,
        };
        return (
            <div style={layout} >
                {
                    matrix.flat(1).map((seat,index) => {
                        const style = seat.active ? { background: "white"} : { background: "black"}
                        return (
                            <div className="seat" key={index} style={style} onClick={() => changeStateSeat(seat)}>
                            </div>
                        )
                    })               
                }
            </div>
        )
    } 
    return (
        <>
            {renderSeats()}
        </>
    )
}