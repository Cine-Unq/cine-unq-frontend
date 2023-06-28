import {render, screen, act} from '@testing-library/react';
import ContainerCinema from '../components/ContainerCinema';
import { getSeatsFromFunction } from '../services/SeatService';
import userEvent from '@testing-library/user-event';
import { generateCompraMP } from '../services/PurchaseService';
import SeatPage from '../pages/SeatPage';
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";
  
jest.mock('../services/SeatService');
jest.mock('../services/PurchaseService')

beforeEach(() => {
    getSeatsFromFunction.mockClear();
    generateCompraMP.mockClear();
});

const replace = window.location.replace;

beforeAll(() => {
    Object.defineProperty(window, 'location', {
        value: { replace: jest.fn() }
    });
});

afterAll(() => {
    window.location.replace = replace;
});

test('render page of seats successfull', async () => {
    const seats = {
        "cantFilas": 1,
        "cantColumnas": 3,
        "asientos": [
            {
                "posFila": 0,
                "posColumna": 0,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 1,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 2,
                "estado": "LIBRE",
            }
        ]
    }
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    await act(async () => render(<ContainerCinema />));
    const listSeats = screen.getAllByTestId('asiento');
    expect(listSeats).toHaveLength(3);
})

test('select three seats free of cinema ', async () => {
    const seats = {
    "cantFilas": 1,
    "cantColumnas": 3,
    "asientos": [
        {
            "posFila": 0,
            "posColumna": 0,
            "estado": "LIBRE",
        },
        {
            "posFila": 0,
            "posColumna": 1,
            "estado": "LIBRE",
        },
        {
            "posFila": 0,
            "posColumna": 2,
            "estado": "LIBRE",
        }
    ]
    }
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    await act(async () => render(<ContainerCinema />));

    const listSeats = screen.getAllByTestId('asiento');
    const seat1 = listSeats[0];
    const seat2 = listSeats[1];
    const seat3 = listSeats[2];

    await act(async () => {
        userEvent.click(seat1);
    })
    await act(async () => {
        userEvent.click(seat2);
    })
    await act(async () => {
        userEvent.click(seat3);
    })

    const seatsSelected = screen.getAllByTestId('asientos-seleccionado');
    expect(seatsSelected).toHaveLength(3);
})

test('can not select one seat occupied from', async () => {
    const seats = {
        "cantFilas": 1,
        "cantColumnas": 3,
        "asientos": [
            {
                "posFila": 0,
                "posColumna": 0,
                "estado": "OCUPADO",
            },
            {
                "posFila": 0,
                "posColumna": 1,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 2,
                "estado": "LIBRE",
            }
        ]
    }
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    await act(async () => render(<ContainerCinema />));

    const listSeats = screen.getAllByTestId('asiento');
    await act(async () => {
        userEvent.click(listSeats[0]);
    })

    expect(screen.queryAllByTestId('asientos-seleccionado')).toHaveLength(0);
});

test('open modal confirm when click button buy seats', async () => {
    const seats = {
        "cantFilas": 1,
        "cantColumnas": 3,
        "asientos": [
            {
                "posFila": 0,
                "posColumna": 0,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 1,
                "estado": "LIBRE",
            },
            {
                "posFila": 0,
                "posColumna": 2,
                "estado": "LIBRE",
            }
        ]
    }
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    await act(async () => render(<ContainerCinema />));

    const listSeats = screen.getAllByTestId('asiento');
    const buttonBuySeats = screen.getByTestId('boton-comprar-asientos');
    await act(async () => {
        userEvent.click(listSeats[0]);
    })
    await act(async () => {
        userEvent.click(buttonBuySeats);
    })

    const listSeatsModal = screen.getAllByTestId('asientos-seleccionados-modal');
    expect(listSeatsModal).toHaveLength(1);
})

test('i make a purchase and redirect to Mercadopago', async () => {
    const seats = {
        "cantFilas": 1,
        "cantColumnas": 3,
        "asientos": [
            {
                "posFila": 0,
                "posColumna": 0,
                "estado": "LIBRE",
            }
        ]
    }
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    generateCompraMP.mockResolvedValueOnce({link:'prueba'})
    
    const routes = [
        {
          path: "/",
          element:
            <SeatPage />
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });


    await act(async () => render(<RouterProvider router={router} />));

    const listSeats = screen.getAllByTestId('asiento');
    const buttonBuySeats = screen.getByTestId('boton-comprar-asientos');
    await act(async () => {
        userEvent.click(listSeats[0]);
    })
    await act(async () => {
        userEvent.click(buttonBuySeats);
    })

    const buttonConfirmPurchase = screen.getByTestId('buton-compra-modal-confirm');
    await act(async () => {
        userEvent.click(buttonConfirmPurchase);
    })
    expect(window.location.replace).toHaveBeenCalled();
}) 