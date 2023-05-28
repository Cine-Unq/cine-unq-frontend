import NavBar from '../components/NavBar';
import ListMovie from '../components/ListMovie';

export default function BillboardCine() {

    return (
        <>
            <NavBar isAdmin={false}></NavBar>
            <ListMovie/>
        </>
    ) 
}