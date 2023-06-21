import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';

export default function SeatLayout() {
    const [sections, setSections] = useState([]);

    useEffect(()=>{
        const data = [
            [
                [
                    {
                        id:1,
                        state: "LIBRE"
                    },
                    {
                        id:2,
                        state: "LIBRE"
                    },
                    {
                        id:3,
                        state: "LIBRE"
                    },
                    {
                        id:4,
                        state: "LIBRE"
                    },
                    {
                        id:5,
                        state: "LIBRE"
                    },
                ],
                [
                    {
                        id:6,
                        state: "LIBRE"
                    },
                    {
                        id:7,
                        state: "LIBRE"
                    },
                    {
                        id:8,
                        state: "LIBRE"
                    },
                    {
                        id:9,
                        state: "LIBRE"
                    },
                    {
                        id:10,
                        state: "LIBRE"
                    },
                ],
                [
                    {
                        id:11,
                        state: "RESERVADO"
                    },
                    {
                        id:12,
                        state: "LIBRE"
                    },
                    {
                        id:13,
                        state: "LIBRE"
                    },
                    {
                        id:14,
                        state: "OCUPADO"
                    },
                    {
                        id:15,
                        state: "RESERVADO"
                    },    
                ]
            ],
            [
                [
                    {
                        id:16,
                        state: "LIBRE"
                    },
                    {
                        id:17,
                        state: "LIBRE"
                    },
                    {
                        id:18,
                        state: "LIBRE"
                    },
                    {
                        id:19,
                        state: "LIBRE"
                    },
                    {
                        id:20,
                        state: "LIBRE"
                    },
                ],
                [
                    {
                        id:21,
                        state: "LIBRE"
                    },
                    {
                        id:22,
                        state: "LIBRE"
                    },
                    {
                        id:23,
                        state: "OCUPADO"
                    },
                    {
                        id:24,
                        state: "LIBRE"
                    }
                ]
            ],
            [
                [
                    {
                        id:16,
                        state: "LIBRE"
                    }
                ],
                [
                    {
                        id:21,
                        state: "LIBRE"
                    },
                    {
                        id:22,
                        state: "LIBRE"
                    },
                    {
                        id:23,
                        state: "LIBRE"
                    },
                    {
                        id:24,
                        state: "LIBRE"
                    }
                ]
            ]
        ]
        setSections(data);
    },[])

    const changeStateOfSeat = (newState, seat, sects) => {
        return sects.map( section => {
            return section.map(r => r.map(s => seat.id === s.id ? ({id: s.id, state:newState}): s))
        })
    }

    const handleClickSeat = (seat) => {
        let newState = seat.state;
        if (seat.state === 'OCUPADO' && seat.state === 'RESERVADO')
            return
        if (seat.state === 'LIBRE') {
            newState = 'SELECTED';
        } else {
            newState = 'LIBRE';
        }
        const result = changeStateOfSeat(newState, seat, sections);
        setSections(result) 
    }
    
    const handleColorSeat = (seat) => {
        const isOccupied = seat.state === 'OCUPADO' || seat.state === 'RESERVADO' ;
        const isSelected = seat.state === 'SELECTED';
        if (isOccupied)
            return "#d61e1e"
        if (isSelected) 
            return "#7bc47f"
        return "#fbf6f6"
    }

    const generateSectionOfSeatsRows = (seats) => {
        const cantRows = seats.length;
        const cantColumns = seats.reduce((acum, row) => acum > row.length ? acum : row.length, 0)
        const layoutSeats = {
            display: 'inline-grid',
            gridTemplateColumns: `repeat(${cantColumns}, 1fr)`,
            gridTemplateRows: `repeat(${cantRows}, 1fr)`,
            gridColumnGap: 2,
            gridRowGap: 4,
        };

        return (
            <div style={layoutSeats}>
                {seats.map(row => {
                    return row.length < cantColumns ? 
                        row.concat(new Array(cantColumns - row.length).fill({})).map((column,index) => Object.keys(column).length === 0 ? <div key={index} ></div>:<div key={column.id} className="seat" style={{background: `${handleColorSeat(column)}`}} onClick={()=>handleClickSeat(column)}></div>) 
                        :row.map((column) => <div key={column.id} className="seat" style={{background: `${handleColorSeat(column)}`}} onClick={()=>handleClickSeat(column)}></div>)
                })}
            </div> 
        )

    } 

    const generateSectionLayout = () => {
        const layoutSection = {
            display: 'inline-grid',
            gridTemplateColumns: `repeat(${sections.length}, 1fr)`,
            gridColumnGap: 2,
            gridTemplateRows: `repeat(1, 1fr)`,
            gridRowGap: 4,
        }
        return (
            <div style={layoutSection}>
                {sections.map(((section,index) => {
                    return (
                        <div key={index} style={{paddingLeft: 5, paddingRight: 5}}>
                            {generateSectionOfSeatsRows(section)}
                        </div>
                    )
                }))
                } 
            </div>
        )
    }

    const handleSelectedSeats = () => {
        const result = sections.flat(2).filter(seat => seat.state === 'SELECTED' )
        console.log(result);
    }

    return(
        <Container>
            <h2 style={{textAlign: 'center', color: 'white'}}>Sala 2</h2>
            <br></br>
            <Row >
                <Col></Col>
                <Col sm={10} md={8} lg={6}>
                    <div style={{background: 'white', height: 120, border: '4px solid #474747', borderRadius: 10}}><h2 style={{textAlign: 'center'}}>Pantalla</h2></div>
                </Col>
                <Col></Col>
            </Row>
            <p></p>
            
            <div className="d-flex justify-content-center">
                {
                    generateSectionLayout()
                }
            </div>
            <p></p>
            <div className="d-flex justify-content-center">
                <Button  variant="primary" size="lg" onClick={handleSelectedSeats}>
                    Comprar asientos
                </Button>
            </div>
        </Container>
    )  
}