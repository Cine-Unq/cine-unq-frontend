import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";
import SeatPage from "../pages/SeatPage";

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
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}