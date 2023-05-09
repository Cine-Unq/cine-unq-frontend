
const handleRequestResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json()
        .then(res => Promise.reject(res))
}

const handleErrorRequestResponse = (err) => err instanceof Error ? Promise.reject({message: '500 Internal Server Error' }) : Promise.reject(err) 



const login = (token) => localStorage.setItem("jwt",JSON.stringify(token))

const getToken = () => JSON.parse(localStorage.getItem("jwt"));

const logout = () => localStorage.removeItem("jwt");

export { handleRequestResponse, handleErrorRequestResponse, getToken, login, logout }