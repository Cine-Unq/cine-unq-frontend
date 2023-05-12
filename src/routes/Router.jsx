import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";
import SeatPage from "../pages/SeatPage";
import QRPage from "../pages/QRPage";
import BillboardCine from "../pages/BillboardCine";
import Authentication from "../components/Authentication";
import ScannerPage from "../pages/ScannerPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/movie/info/:idMovie",
        element:
        <Authentication typeRol="USER">
            <MoviePage/>
        </Authentication>,
    },
    {
        path: "/movie/seats/:movie/funcion/:idFunction",
        element:
        <Authentication typeRol="USER">
            <SeatPage/>
        </Authentication>,
        
    },
    {
        path: "/movie/purchase/qr/:idCompra",
        element: 
        <Authentication typeRol="USER">
            <QRPage/>
        </Authentication>,

    },
    {
        path: "/billboard/movies",
        element:
        <Authentication typeRol="USER">
            <BillboardCine/>
        </Authentication>,
    },
    {
        path: "/panel/scanner",
        element:
        // <Authentication typeRol="ADMIN">
            <ScannerPage/>
        // </Authentication>,
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}