import QRCode from "react-qr-code";
import NavBar from '../components/NavBar';

export default function QRPage() {
    return (
        <>
            <NavBar></NavBar>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <div style={{ display:'flex', justifyContent: 'center', background: 'white', padding: 10, width: '300px'}}>
                    <QRCode 
                        size={256}
                        value={"Purchase tickets"}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>
        </>
    );
}