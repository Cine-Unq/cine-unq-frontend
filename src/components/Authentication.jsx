import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getToken } from "../services/utils";
export default function Authentication({ children, typeRol }) {
    const haveRol = () => {
        const { rol } = jwt_decode(getToken());
        return rol.some(r => r.authority == typeRol);  
    }

    return (
        <>
            {getToken() && haveRol() ? children : <Navigate to="/" replace={true} />}
        </>
    )
}