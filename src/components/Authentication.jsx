import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getToken } from "../services/utils";
export default function Authentication({ children, roles }) {
    const haveRol = () => {
        const { rol } = jwt_decode(getToken());
        return rol.some(r => roles.includes(r.authority));  
    }

    return (
        <>
            {getToken() && haveRol() ? children : <Navigate to="/" replace={true} />}
        </>
    )
}