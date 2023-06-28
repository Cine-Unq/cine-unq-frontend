
export default function Cinema({ matrix, updateMatrix }) {
    const changeStateSeat = (seat) => {
        if (seat.estado === 'LIBRE') {
            let newMatrix = []
            for(let f=0; f < matrix.length; f++) {
                newMatrix.push([]);
                for(let c=0; c < matrix[0].length; c++) {
                    if (seat.posFila === f && seat.posColumna === c ){
                        newMatrix[f][c] = {...seat,selected:!seat.selected};
                    } else {
                        newMatrix[f][c] = matrix[f][c]; 
                    }
                }
            }
            updateMatrix(newMatrix);
        }
    }

    const colorOfStateSeat = (estado) => {
        if (estado === "NODISPONIBLE")
            return { background: "black"};
        return { background: "red"};

    }
    const renderSeats = () => {
        let layout = {
            display: 'grid',
            gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)`,
            gridTemplateRows: `repeat(${matrix.length}, 1fr)`,
            gridColumnGap: 2,
            gridRowGap: 4,
        };
        return (
            <div style={layout} >
                {
                    matrix.flat(1).map((seat,index) => {
                        let style;
                        if (seat.estado === 'LIBRE') {
                            style = seat.selected ?  { background: "#7bc47f"} : { background: "white"};
                        } else {
                            style = colorOfStateSeat(seat.estado);
                        }
                        if (seat.estado === "NODISPONIBLE") {
                            return (
                                <div className="seat" key={index} style={style} onClick={() => changeStateSeat(seat)}>
                                </div>
                            )
                        } else {
                            return (
                                <div data-testid='asiento' className="seat" key={index} style={style} onClick={() => changeStateSeat(seat)}>
                                </div>
                            )

                        }
                            
                    })               
                }
            </div>
        )
    }
    return (
        <div className="Cinema">
            <div className="screen" />
            {
                renderSeats() 
            }
        </div>
    );
}