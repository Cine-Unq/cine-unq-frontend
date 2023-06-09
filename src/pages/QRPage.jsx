import QRCode from "react-qr-code";
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getPurchase } from "../services/PurchaseService";
import PopUpError from "../components/PopupError";

export default function QRPage() {
    const [purchase, setPurchase]  = useState(false);
    const { idCompra }= useParams();
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
            {showError && <PopUpError  body={textError} />}
            { purchase ? 
                <> 
                    <NavBar isAdmin={false}></NavBar>
                    <h4 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Se finalizo la compra exitosamente</h4>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{ display:'flex', justifyContent: 'center', background: 'white', padding: 10, width: '300px'}}>
                            <QRCode 
                                size={256}
                                value={JSON.stringify({compra:idCompra})}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                </>
                : <></>    
            }
        </div>
    );
}