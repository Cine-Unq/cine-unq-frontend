const createLinkPay = () => {
    const purchase  = {
        items: [
            {
                title: "entrada asiento cineunq",
                unit_price: 1,
                quantity: 1,
            }
        ],
        back_urls: {
            "success": "http://localhost:3000/movie/purchase/success",
            "failure": "http://localhost:3000/movie/purchase/failure",
            "pending": "http://localhost:3000/movie/purchase/pending"
        }
    }
    const TOKEN = ""; 
    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TOKEN,
        },
        body: JSON.stringify(purchase)
    }
    const URL = "https://api.mercadopago.com/checkout/preferences";
    return fetch(URL, header)
        .then(res => res.json())
        .then(body => Promise.resolve({link_pago: body.init_point}))
        .catch(err => Promise.reject({message : err})) 
}

export { createLinkPay }