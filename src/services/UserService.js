const API = "http://localhost:8080";

const loginUser = ( email, password) => {
    const body = {
        "mail": email,
        "password": password
    }
    return fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((response) => {
            if (response.ok) {
                return response.json().then(res => Promise.resolve(res))
            }
            return Promise.reject({message: "email o contraseña incorrectos"})
        })
        .catch(err => err instanceof Error ? Promise.reject({message: '500 Internal Server Error' }) : Promise.reject(err))
}
export { loginUser };