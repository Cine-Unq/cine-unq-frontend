import NavBar from "../components/NavBar";
import CreateFunction from "../components/CreateFunction";
export default function CreateFunctionPage() {
    return (
        <div data-testid='pagina-crear-funcion'>
            <NavBar isAdmin={true}></NavBar>
            <CreateFunction></CreateFunction>
        </div>
    )   
}