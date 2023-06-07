import ListSeatsReserved from "../components/ListSeatsReserved";
import NavBar from "../components/NavBar";

export default function InfoPurchasePage() {
    return (
        <div>
            <NavBar isAdmin={true}></NavBar>
            <ListSeatsReserved></ListSeatsReserved>
        </div>
    ); 
}