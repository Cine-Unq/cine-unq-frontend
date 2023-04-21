import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";
import SeatPage from "../pages/SeatPage";
import QRPage from "../pages/QRPage";
import BillboardCine from "../pages/BillboardCine";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/movie/info/:idMovie",
        element: <MoviePage/>
    },
    {
        path: "/movie/seats/:movie/funcion/:idFunction",
        element: <SeatPage/>
    },
    {
        path: "/movie/purchase/qr/:idCompra",
        element: <QRPage/>
    },
    {
        path: "/billboard/movies",
        element: <BillboardCine/>
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}