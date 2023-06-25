import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";
import CreateFunctionPage from '../pages/CreateFunctionPage';
import { getSalas } from '../services/SeatService';
import { getAllMovies, createFunction } from "../services/MovieService";

jest.mock('../services/SeatService');
jest.mock('../services/MovieService');

beforeEach(() => {
    getSalas.mockClear();
    getAllMovies.mockClear();
    createFunction.mockClear();
})

test('render page create function', async () => {
    getSalas.mockResolvedValue([]);
    getAllMovies.mockResolvedValue([]);
    const routes = [
        {
        path: "/",
        element:
            <CreateFunctionPage/>
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));
    const pageCreateFunction = screen.getByTestId('pagina-crear-funcion');
    expect(pageCreateFunction).toBeInTheDocument();
})

test('create one function in 2D to The avengers', async () => {
    getSalas.mockResolvedValue([
        {
            "tipo": "2D",
            "salas": [
                {
                    id:1,
                    nombre:"SALA1"
                },
                {
                    id:2,
                    nombre:"SALA2"
                }
            ]
        },
        {
            "tipo": "3D",
            "salas": [
                {
                    id:3,
                    nombre:"SALA3"
                }
            ]
        }
    ]);
    getAllMovies.mockResolvedValue([
        {
            "id": 1,
            "nombre": "The Avengers",
            "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
            "duracion": 150,
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
        }
    ]);
    createFunction.mockResolvedValue({});
    const routes = [
        {
        path: "/",
        element:
            <CreateFunctionPage/>
        }
    ];
    
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));

    const inputTimeFunction = screen.getByTestId('input-horario-funcion');
    const selectMovies = screen.getAllByTestId('seleccion-pelicula');
    const formatSalas = screen.getAllByTestId('seleccion-formato-funcion');
    await act(async () => {
        await userEvent.type(inputTimeFunction, '12:00');
        await userEvent.click(selectMovies[0], '6');
        await userEvent.click(formatSalas[0]);
    });
    const salas = screen.getAllByTestId('seleccion-sala');
    await act(async () => {
        await userEvent.click(salas[0]);
    })
    const buttonCreateFunction = screen.getByTestId('crear-funcion');
    await act(async () => {
        await userEvent.click(buttonCreateFunction);
    })
    const modalConfirm = screen.getByTestId('modal-confirmacion-creacion-funcion');
    const buttonConfirmCreateFunction = screen.getByTestId('confirmar-creacion-funcion')
    await act(async () => {
        await userEvent.click(buttonConfirmCreateFunction);
    })
    const msgSuccessfull = screen.getByTestId('msg-creacion-funcion');
    expect(msgSuccessfull).toHaveTextContent("Se creo exitosamente la función");
}) 