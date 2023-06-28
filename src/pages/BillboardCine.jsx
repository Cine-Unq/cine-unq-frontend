import NavBar from '../components/NavBar';
import ListMovie from '../components/ListMovie';

export default function BillboardCine() {

    return (
        <div data-testid='pagina-billboard'>
            <NavBar isAdmin={false}></NavBar>
            <ListMovie/>
        </div>
    ) 
}