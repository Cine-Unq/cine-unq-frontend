import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";
import SeatPage from "../pages/SeatPage";
import QRPage from "../pages/QRPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/movie/info",
        element: <MoviePage/>
    },
    {
        path: "/movie/seats/",
        element: <SeatPage/>
    },
    {
        path: "/movie/purchase/qr",
        element: <QRPage/>
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}