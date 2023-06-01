import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";
import SeatPage from "../pages/SeatPage";
import QRPage from "../pages/QRPage";
import BillboardCine from "../pages/BillboardCine";
import Authentication from "../components/Authentication";
import ScannerPage from "../pages/ScannerPage";
import InfoPurchasePage from "../pages/InfoPurchasePage";
import InfoStateFunction from "../pages/InfoStateFunctions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/movie/info/:idMovie",
        element:
            <Authentication roles={["USER", "ADMIN"]}>
                <MoviePage />
            </Authentication>,
    },
    {
        path: "/movie/seats/:movie/funcion/:idFunction",
        element:
            <Authentication roles={["USER", "ADMIN"]}>
                <SeatPage />
            </Authentication>,

    },
    {
        path: "/movie/purchase/qr/:idCompra",
        element:
            <Authentication roles={["USER", "ADMIN"]}>
                <QRPage />
            </Authentication>,

    },
    {
        path: "/billboard/movies",
        element:
            <Authentication roles={["USER", "ADMIN"]}>
                <BillboardCine />
            </Authentication>,
    },
    {
        path: "/panel/scanner",
        element:
            <Authentication roles={["ADMIN"]}>
                <ScannerPage />
            </Authentication>,
    },
    {
        path: "/panel/info/purchase/:idCompra",
        element:
            <Authentication roles={["ADMIN"]}>
                <InfoPurchasePage />
            </Authentication>,
    },
    {
        path: "/panel/info/peliculas/funcion",
        element:
            <Authentication roles={["ADMIN"]}>
                <InfoStateFunction />
            </Authentication>,
    },
    {
        path: "/movie/purchase/success/:id",
        element:
            <di>
                <h1>Pago Exitoso</h1>
            </di>
    },
    {
        path: "/movie/purchase/failure",
        element:
            <di>
                <h1>Pago Fallido</h1>
            </di>
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}