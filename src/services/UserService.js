// const loginUser = () => {
//     return Promise.resolve("Loggueado correctamente");
// }
import { handleErrorRequestResponse, handleRequestResponse } from "./utils";
const API = "http://localhost:8080";

const loginUser = () => {
    const body = {
        "mail": "pepeArgento@gmail.com.ar",
        "password": "Pepe123"
    }
    return fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse);
}
export { loginUser };