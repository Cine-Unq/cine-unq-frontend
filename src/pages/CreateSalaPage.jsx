import CreateSala from "../components/CreateSala";
import NavBar from "../components/NavBar";

export default function CreateSalaPage() {
    return (
        <div data-testid='pagina-de-creacion-sala'>
            <NavBar isAdmin={true}></NavBar>
            <CreateSala></CreateSala>
        </div>
    )   
}