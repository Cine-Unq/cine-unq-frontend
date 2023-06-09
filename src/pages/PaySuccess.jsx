import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { confirmPayedPurchase } from "../services/PurchaseService";
import { Navigate } from "react-router-dom";

export default function PaySuccess() {
    const { id } = useParams();
    const [navigate, setNavigate] = useState(false);
    useEffect(() => {
        confirmPayedPurchase(id)
            .then(() => setNavigate(true))
    })
    return (
        <>
            {navigate && <Navigate to={`/movie/purchase/qr/${id}`} replace={true}/>}
            <NavBar isAdmin={false}></NavBar>
        </>
    ); 
}