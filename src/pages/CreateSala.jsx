import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function CreateSala() {
    const [cantSections, setCantSections] = useState(0);
    const handleCreateSecction = () => {
        const layoutSection = {
            display: 'inline-grid',
            gridTemplateColumns: `repeat(1, 1fr)`,
            gridColumnGap: 2,
            gridTemplateRows: `repeat(${cantSections}, 1fr)`,
            gridRowGap: 4,
        };
        return (
            <div style={layoutSection}>
                {
                    new Array(Number(cantSections)).fill("").map((_,index) => {
                        return (
                            <div key={index} style={{paddingLeft: 5, paddingRight: 5, height: 50, width: 100, background: 'white'}}>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            <h2 style={{color: 'white'}}>Cantidad de secciones {cantSections}</h2>
            <div>
                <Form.Select aria-label="Default select example" onChange={({target})=>setCantSections(target.value)}>
                    <option value="0" >Seleccionar cantidad de secciones</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </div>
            <br></br>
            {cantSections > 0&& handleCreateSecction()}
            <br></br>
            <Button> Guardar Sala</Button>
        </div>
    )
}