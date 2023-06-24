import NavBar from "../components/NavBar";
import CreateFunction from "../components/CreateFunction";
export default function CreateFunctionPage() {
    return (
        <>
            <NavBar isAdmin={true}></NavBar>
            <CreateFunction></CreateFunction>
        </>
    )   
}