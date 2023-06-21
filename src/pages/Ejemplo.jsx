export default function Ejemplo() {
    const section1 = {
        display: 'inline-grid',
        gridTemplateColumns: `repeat(12, 1fr)`,
        gridTemplateRows: `repeat(1, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    };
    const section2 = {
        display: 'inline-grid',
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows: `repeat(1, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    };
    const section3 = {
        display: 'inline-grid',
        gridTemplateColumns: `repeat(2, 1fr)`,
        gridTemplateRows: `repeat(1, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    };

    const subSection1 = {
        display: 'grid',
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridTemplateRows: `repeat(4, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    }
    const subSection2 = {
        display: 'grid',
        gridTemplateColumns: `repeat(10, 1fr)`,
        gridTemplateRows: `repeat(4, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    }
    const subSection3 = {
        display: 'grid',
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridTemplateRows: `repeat(4, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    }
    const subSection4 = {
        display: 'grid',
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows: `repeat(3, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    }    
    const subSection5 = {
        display: 'grid',
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridTemplateRows: `repeat(4, 1fr)`,
        gridColumnGap: 2,
        gridRowGap: 4,
    }

    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            <div style={section1} >
                {
                    new Array(Number(12)).fill("").map((_,index) => {
                        return (
                            <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
            <div style={section2} >
                <div style={subSection1}>
                    {
                        new Array(Number(16)).fill("").map((_,index) => {
                            return (
                                <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={subSection2}>
                    {
                        new Array(Number(40)).fill("").map((_,index) => {
                            return (
                                <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                                </div>
                            )
                        })
                    }  
                </div>
                <div style={subSection3}>
                    {
                        new Array(Number(16)).fill("").map((_,index) => {
                            return (
                                <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <br></br>
            <div style={section3} >
                <div style={subSection4}>
                    {
                        new Array(Number(9)).fill("").map((_,index) => {
                            return (
                                <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={subSection5}>
                    {
                        new Array(Number(16)).fill("").map((_,index) => {
                            return (
                                <div className="seat" key={index} style={{paddingLeft: 5, paddingRight: 5, height: 30, width: 30, background: 'white'}}>
                                </div>
                            )
                        })
                    }  
                </div>
            </div>
        </div>
    )
}