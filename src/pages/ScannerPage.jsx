import NavBar from '../components/NavBar';
import Scanner from '../components/Scanner';

export default function ScannerPage() {
    return (
        <div>
            <NavBar isAdmin={true}></NavBar>
            <Scanner></Scanner>
        </div>
    )
} 