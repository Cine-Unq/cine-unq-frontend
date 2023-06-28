export default function CreateLayout({matrix, updateMatrix}) {
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
            <>
                <div>
                    {
                        matrix.length > 0 ?
                            <p style={{textAlign: 'center', color :'yellow'}}> Al hacer click en un asiento si esta activado lo desactivara  y si esta desactivado lo activara</p>
                            : <></>
                    }
                </div>
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
            </>
        )
    } 
    return (
        <>
            {renderSeats()}
        </>
    )
}