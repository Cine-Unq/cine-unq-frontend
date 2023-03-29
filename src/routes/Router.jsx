import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}