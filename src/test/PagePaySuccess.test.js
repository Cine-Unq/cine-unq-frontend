import {render, screen, act} from '@testing-library/react';
import PaySuccess from '../pages/PaySuccess';
import { confirmPayedPurchase, getPurchase } from "../services/PurchaseService";
import QRPage from '../pages/QRPage';
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";

jest.mock('../services/PurchaseService')

beforeEach(() => {
    confirmPayedPurchase.mockClear();
    getPurchase.mockClear();
});

test('render page of pay success redirect to page qr', async () => {
    const purchase = {
        "sala": "S1",
        "funcion": "14:53",
        "fechaCompra": "2023-06-09",
        "pelicula": "The Avengers",
        "cliente": "user",
        "clienteID": 1,
        "asientosReservados": [
            {
                "id": 1,
                "estado": "RESERVADO",
                "columna": "A",
                "fila": "1"
            }
        ],
        "asientosOcupados": [],
        "compraID": 1
    }
    getPurchase.mockResolvedValue(purchase);
    confirmPayedPurchase.mockResolvedValue({"compra":""});
    const routes = [
        {
            path: "/:idCompra",
            element:
                <PaySuccess />
        },
        {
            path: "/movie/purchase/qr/:idCompra",
            element:
                <QRPage />
        }
    ];

    const router = createMemoryRouter(routes, {
        initialEntries: ["/1"],
        initialIndex: 0,
    });
    
    await act(async () => render(<RouterProvider router={router} />));
    
    const qr = screen.getByTestId('qr-compra');

    expect(qr).toBeInTheDocument();    
})