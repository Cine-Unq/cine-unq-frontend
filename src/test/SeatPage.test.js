import {render, screen, act} from '@testing-library/react';
import ContainerCinema from '../components/ContainerCinema';
import { getSeatsFromFunction } from '../services/SeatService';
import userEvent from '@testing-library/user-event';

jest.mock('../services/SeatService');

beforeEach(() => getSeatsFromFunction.mockClear());


test('render page of seats successfull', async () => {
    const seats =
    [
        {
            "id": 113,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "1"
        },
        {
            "id": 117,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "B",
            "fila": "1"
        },
        {
            "id": 121,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "C",
            "fila": "1"
        },
        {
            "id": 125,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "D",
            "fila": "1"
        },
        {
            "id": 129,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "E",
            "fila": "1"
        },
        {
            "id": 133,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "F",
            "fila": "1"
        },
        {
            "id": 137,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "G",
            "fila": "1"
        },
        {
            "id": 141,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "H",
            "fila": "1"
        },
        {
            "id": 145,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "I",
            "fila": "1"
        },
        {
            "id": 149,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "J",
            "fila": "1"
        },
        {
            "id": 153,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "K",
            "fila": "1"
        },
        {
            "id": 157,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "L",
            "fila": "1"
        },
        {
            "id": 161,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "M",
            "fila": "1"
        },
        {
            "id": 165,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "N",
            "fila": "1"
        },
        {
            "id": 114,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "2"
        },
        {
            "id": 118,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "B",
            "fila": "2"
        },
        {
            "id": 122,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "C",
            "fila": "2"
        },
        {
            "id": 126,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "D",
            "fila": "2"
        },
        {
            "id": 130,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "E",
            "fila": "2"
        },
        {
            "id": 134,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "F",
            "fila": "2"
        },
        {
            "id": 138,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "G",
            "fila": "2"
        },
        {
            "id": 142,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "H",
            "fila": "2"
        },
        {
            "id": 146,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "I",
            "fila": "2"
        },
        {
            "id": 150,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "J",
            "fila": "2"
        },
        {
            "id": 154,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "K",
            "fila": "2"
        },
        {
            "id": 158,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "L",
            "fila": "2"
        },
        {
            "id": 162,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "M",
            "fila": "2"
        },
        {
            "id": 166,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "N",
            "fila": "2"
        },
        {
            "id": 115,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "3"
        },
        {
            "id": 119,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "B",
            "fila": "3"
        },
        {
            "id": 123,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "C",
            "fila": "3"
        },
        {
            "id": 127,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "D",
            "fila": "3"
        },
        {
            "id": 131,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "E",
            "fila": "3"
        },
        {
            "id": 135,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "F",
            "fila": "3"
        },
        {
            "id": 139,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "G",
            "fila": "3"
        },
        {
            "id": 143,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "H",
            "fila": "3"
        },
        {
            "id": 147,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "I",
            "fila": "3"
        },
        {
            "id": 151,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "J",
            "fila": "3"
        },
        {
            "id": 155,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "K",
            "fila": "3"
        },
        {
            "id": 159,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "L",
            "fila": "3"
        },
        {
            "id": 163,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "M",
            "fila": "3"
        },
        {
            "id": 167,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "N",
            "fila": "3"
        },
        {
            "id": 116,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "4"
        },
        {
            "id": 120,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "B",
            "fila": "4"
        },
        {
            "id": 124,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "C",
            "fila": "4"
        },
        {
            "id": 128,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "D",
            "fila": "4"
        },
        {
            "id": 132,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "E",
            "fila": "4"
        },
        {
            "id": 136,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "F",
            "fila": "4"
        },
        {
            "id": 140,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "G",
            "fila": "4"
        },
        {
            "id": 144,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "H",
            "fila": "4"
        },
        {
            "id": 148,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "I",
            "fila": "4"
        },
        {
            "id": 152,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "J",
            "fila": "4"
        },
        {
            "id": 156,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "K",
            "fila": "4"
        },
        {
            "id": 160,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "L",
            "fila": "4"
        },
        {
            "id": 164,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "M",
            "fila": "4"
        },
        {
            "id": 168,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "N",
            "fila": "4"
        }
    ]
    getSeatsFromFunction.mockResolvedValueOnce(seats);


    await act(async () => render(<ContainerCinema />));
    const listSeats = screen.getAllByTestId('asiento');
    expect(listSeats).toHaveLength(56);
})

test('select three seats free of cinema ', async () => {
    const seats =
    [
        {
            "id": 113,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "1"
        },
        {
            "id": 117,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "B",
            "fila": "1"
        },
        {
            "id": 121,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "C",
            "fila": "1"
        }
    ]
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
    const seats =
    [
        {
            "id": 113,
            "estaLibre": false,
            "estaReservado": false,
            "estaOcupado": true,
            "columna": "A",
            "fila": "1"
        }
    ]
    getSeatsFromFunction.mockResolvedValueOnce(seats);
    await act(async () => render(<ContainerCinema />));

    const listSeats = screen.getAllByTestId('asiento');
    await act(async () => {
        userEvent.click(listSeats[0]);
    })

    expect(screen.queryAllByTestId('asientos-seleccionado')).toHaveLength(0);
});

test('open modal confirm when click button buy seats', async () => {
    const seats =
    [
        {
            "id": 113,
            "estaLibre": true,
            "estaReservado": false,
            "estaOcupado": false,
            "columna": "A",
            "fila": "1"
        }
    ]
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