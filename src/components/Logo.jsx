import logocine from '../imagenes/logocine.png'
const styles = {
    size_logo: {
        "width": "350px", "height": "350px"
    }
}
export default function Logo() {
    return (
        <div className="d-flex justify-content-center">
            <img src={logocine} className="App-logo" alt="logo" style={styles.size_logo} />
        </div>
    )
}