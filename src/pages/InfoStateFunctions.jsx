import NavBar from "../components/NavBar";
import DisplayStateFunction from "../components/DisplayStateFunction";
export default function InfoStateFunction() {
    return (
        <>
            <NavBar isAdmin={true}></NavBar>
            <DisplayStateFunction/>
        </>
    );
}