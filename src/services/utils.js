
const handleRequestResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json()
        .then(res => Promise.reject(res))
}

const handleErrorRequestResponse = (err) => err instanceof Error ? Promise.reject({message: '500 Internal Server Error' }) : Promise.reject(err) 

const fetchWithAuthentication = (method, url, body) => {
    const token = getToken();
    const header = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    }
    if (Object.keys(body).length > 0) {
        header.body = JSON.stringify(body)
    }
    return fetch(url, header)
        .then(handleRequestResponse)
        .catch(handleErrorRequestResponse)
}


const login = (token) => localStorage.setItem("jwt",JSON.stringify(token))

const getToken = () => JSON.parse(localStorage.getItem("jwt"));

const logout = () => localStorage.removeItem("jwt");

export { fetchWithAuthentication, handleRequestResponse, handleErrorRequestResponse, getToken, login, logout }