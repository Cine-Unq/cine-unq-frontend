
const handleRequestResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json()
        .then(res => Promise.reject(res))
}

const handleErrorRequestResponse = (err) => err instanceof Error ? Promise.reject({message: '500 Internal Server Error' }) : Promise.reject(err) 

export { handleRequestResponse, handleErrorRequestResponse }