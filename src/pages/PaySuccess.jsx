import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { confirmPayedPurchase } from "../services/PurchaseService";
import { Navigate } from "react-router-dom";

export default function PaySuccess() {
    const { idCompra } = useParams();
    const [navigate, setNavigate] = useState(false);
    useEffect(() => {
        confirmPayedPurchase(idCompra)
            .then(res => setNavigate(true))
    })
    return (
        <>
            {navigate && <Navigate to={`/movie/purchase/qr/${idCompra}`} replace={true}/>}
            <NavBar isAdmin={false}></NavBar>
        </>
    ); 
}