import NavBar from "../components/NavBar";

export default function PayRejected() {
    return (
        <>
            <NavBar isAdmin={false}></NavBar>
            <h1 data-testid='pago-rechazado' style={{textAlign: 'center', color: 'white'}}>No se pudo completar el pago de la compra</h1>
        </>
    ); 
}