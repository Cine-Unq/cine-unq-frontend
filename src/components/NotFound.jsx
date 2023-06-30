import logocine from '../assets/logocine.png'
export default function NotFound() {
    return (
        <div style={{display: 'grid', justifyContent: 'center'}}>
            <p></p>
            <p></p>
            <img src={logocine} className="App-logo" alt="logo" style={{width: "350px", height: "350px"}} />
            <h2 style={{color: 'white', textAlign: 'center'}}>PÁGINA NO DISPONIBLE</h2>
        </div>
    )
}