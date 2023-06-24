import CreateSala from "../components/CreateSala";
import NavBar from "../components/NavBar";

export default function CreateSalaPage() {
    return (
        <>
            <NavBar isAdmin={true}></NavBar>
            <CreateSala></CreateSala>
        </>
    )   
}