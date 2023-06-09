import {render, screen, act} from '@testing-library/react';
import { getPurchase } from '../services/PurchaseService';
import { confirmSeats } from '../services/SeatService';
import InfoPurchasePage from '../pages/InfoPurchasePage';
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import userEvent from '@testing-library/user-event';

jest.mock('../services/PurchaseService');
jest.mock('../services/SeatService');

const routes = [
    {
        path: "/:idCompra",
        element:
            <InfoPurchasePage />
    },
];

const router = createMemoryRouter(routes, {
    initialEntries: ["/1"],
    initialIndex: 0,
});
beforeEach(() => {
    getPurchase.mockClear();
    confirmSeats.mockClear();
})

test('display information of purchase with 5 seats reserved', async () => {
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
    getPurchase.mockResolvedValue(purchase);
    await act(async () => render(<RouterProvider router={router} />));

    const seatsOfPurchase = screen.getAllByTestId('asiento-info');

    expect(seatsOfPurchase).toHaveLength(5);
    expect(seatsOfPurchase[0].textContent).toEqual('Asiento 1 A')
    expect(seatsOfPurchase[1].textContent).toEqual('Asiento 2 A')
    expect(seatsOfPurchase[2].textContent).toEqual('Asiento 3 A')
    expect(seatsOfPurchase[3].textContent).toEqual('Asiento 4 A')
    expect(seatsOfPurchase[4].textContent).toEqual('Asiento 1 B')

})

test('selected 2 seats of purchase', async () => {
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
    getPurchase.mockResolvedValue(purchase);
    await act(async () => render(<RouterProvider router={router} />));
    
    const seatsOfPurchase = screen.getAllByTestId('asiento-info');
    await act(async () => {
        userEvent.click(seatsOfPurchase[0]);
    })

    await act(async () => {
        userEvent.click(seatsOfPurchase[1]);
    })

    const cantSeatsSelected = screen.getByTestId('cant-asientos-seleccionados-de-compra');

    expect(cantSeatsSelected.textContent).toEqual('Asientos seleccionados 2');
})

test('selected 2 seats of purchase and click button confirm seats and update seats to confirmed', async () => {
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
    getPurchase.mockResolvedValue(purchase);
    confirmSeats.mockResolvedValue({});
    await act(async () => render(<RouterProvider router={router} />));
    
    let seatsOfPurchase = screen.getAllByTestId('asiento-info');
    await act(async () => {
        userEvent.click(seatsOfPurchase[0]);
    })

    await act(async () => {
        userEvent.click(seatsOfPurchase[1]);
    })

    const buttonConfirmeSeats = screen.getByTestId('confirmar-asientos'); 

    await act(async () => {
        userEvent.click(buttonConfirmeSeats);
    })
    
    const buttonConfirmModal = screen.getByTestId('boton-actualizar-asientos');
    const purchaseUpdate = {
        "sala": "S1",
        "funcion": "14:53",
        "fechaCompra": "2023-06-09",
        "pelicula": "The Avengers",
        "cliente": "user",
        "clienteID": 1,
        "asientosReservados": [
            {
                "id": 1,
                "estado": "OCUPADO",
                "columna": "A",
                "fila": "1"
            },
            {
                "id": 2,
                "estado": "OCUPADO",
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
    getPurchase.mockResolvedValue(purchaseUpdate);
    await act(async () => {
        userEvent.click(buttonConfirmModal);
    })

    seatsOfPurchase = screen.getAllByTestId('asiento-info');
    
    expect(seatsOfPurchase[0]).toHaveStyle({ background: 'green', marginBottom: 10 });
    expect(seatsOfPurchase[1]).toHaveStyle({ background: 'green', marginBottom: 10 });
})
