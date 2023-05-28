const body = {
    pelicula: "Avengers",
    funcion : "12:30",
    asientos : [
        { 
            id:10,
            fila:1,
            columna:'H',
            estado:'RESERVADO'
        },
        { 
            id:20,
            fila:2,
            columna:'G',
            estado: 'RESERVADO'
        },
        { 
            id:30,
            fila:3,
            columna:'I',
            estado: 'OCUPADO'
        }
    ]
}
const getInfoPurchase = () => {
    return Promise.resolve(body); 
}

export { getInfoPurchase }