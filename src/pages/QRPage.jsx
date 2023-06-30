import QRCode from "react-qr-code";
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getPurchase } from "../services/PurchaseService";
import PopUpError from "../components/PopupError";

export default function QRPage() {
    const [purchase, setPurchase] = useState(false);
    const { idCompra } = useParams();
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");
    useEffect(() => {
        getPurchase(idCompra)
            .then(res => setPurchase(res))
            .catch(err => {
                setTextError(err.message);
                setShowError(true)
            })
    }, [])
    return (
        <div>
            {showError && <PopUpError body={textError} />}
            {purchase ?
                <>
                    <NavBar isAdmin={false}></NavBar>
                    <h3 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Se finalizó la compra exitosamente</h3>
                    <br></br>
                    <div style={{ display: 'grid', justifyContent: 'center', color: "white" }}>
                        <div style={{ textAlign: 'center' }}>
                            <h4>Sala : {purchase.sala}</h4>
                            <h4>Película  : {purchase.pelicula}</h4>
                            <h4>Horario función : {purchase.funcion}</h4>
                            <h4>Asientos comprados : {purchase.asientosReservados.concat(purchase.asientosOcupados).map(seat => `${seat.letter}${seat.posColumna + 1}`).join(",")}</h4>
                        </div>
                        <div style={{ display: 'grid', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', background: 'white', padding: 10, width: '300px' }}>
                                <QRCode
                                    data-testid='qr-compra'
                                    size={256}
                                    value={JSON.stringify({ compra: idCompra })}
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                        </div>
                    </div>
                </>
                : <></>
            }
        </div>
    );
}