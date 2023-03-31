import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MoviePage from "../pages/MoviePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/movie/info",
        element: <MoviePage/>
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}