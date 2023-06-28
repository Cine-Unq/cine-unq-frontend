import {render, screen, act} from '@testing-library/react';
import { getPurchase } from '../services/PurchaseService';
import QRPage from '../pages/QRPage';
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";

jest.mock('../services/PurchaseService')

beforeEach(() => {
    getPurchase.mockClear();
});

test('render page QR successfull', async () => {
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
            },
            {
                "id": 2,
                "estado": "RESERVADO",
                "columna": "A",
                "fila": "2"
            },
            {
                "id": 3,
                "estado": "RESERVADO",
                "columna": "A",
                "fila": "3"
            },
            {
                "id": 4,
                "estado": "RESERVADO",
                "columna": "A",
                "fila": "4"
            },
            {
                "id": 5,
                "estado": "RESERVADO",
                "columna": "B",
                "fila": "1"
            }
        ],
        "asientosOcupados": [],
        "compraID": 1
    }
    getPurchase.mockResolvedValueOnce(purchase);

    const routes = [
        {
          path: "/movie/purchase/qr/:idCompra",
          element:
            <QRPage />
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/movie/purchase/qr/1"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));

    const qr = screen.getByTestId('qr-compra');

    expect(qr).toBeInTheDocument();    
})