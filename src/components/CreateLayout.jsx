export default function CreateLayout({ matrix, updateMatrix }) {
    const changeStateSeat = (seat) => {
        let newMatrix = []
        for (let row = 0; row < matrix.length; row++) {
            newMatrix.push([]);
            for (let column = 0; column < matrix[0].length; column++) {
                if (matrix[row][column].id === seat.id) {
                    const { id, fila, columna, active } = seat;
                    const state = !active;
                    newMatrix[row][column] = { id: id, fila: fila, columna: columna, active: state };
                } else {
                    newMatrix[row][column] = matrix[row][column];
                }
            }
        }
        updateMatrix(newMatrix)
    }
    const renderSeats = () => {
        let cantColumns = 1
        let cantRows = 1
        if (matrix.length > 0) {
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
                            <p style={{ textAlign: 'center', color: 'yellow' }}> Al hacer clic en un asiento, si está activado, lo desactivará y si está desactivado, lo activará</p>
                            : <></>
                    }
                </div>
                <div style={layout} >
                    {
                        matrix.flat(1).map((seat, index) => {
                            const style = seat.active ? { background: "white" } : { background: "black" }
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