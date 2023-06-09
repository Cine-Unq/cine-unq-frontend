import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getAllMovies, getFunctionsOfMovie } from '../services/MovieService';
import { getSeatsFromFunctionAdmin } from "../services/SeatService";
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import InfoStateFunction from '../pages/InfoStateFunctions';

jest.mock('../services/MovieService');
jest.mock('../services/SeatService');


const routes = [
    {
        path: "/",
        element:
            <InfoStateFunction />
    },
];

const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
});

beforeEach(() => {
    getAllMovies.mockClear();
    getFunctionsOfMovie.mockClear();
    getSeatsFromFunctionAdmin.mockClear();
})

test('display movies in billboard', async () => {
    const movies = [
        {
            "id": 1,
            "nombre": "The Avengers",
            "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
            "duracion": 150,
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
        },
        {
            "id": 2,
            "nombre": "John Wick",
            "descripcion": "Una exploración de las aventuras, las desgarradoras experiencias y las hazañas del legendario asesino a sueldo, John Wick.",
            "duracion": 200,
            "imagen": "https://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg"
        },
        {
            "id": 3,
            "nombre": "Evil Dead",
            "descripcion": "En una misteriosa y aislada cabaña, un grupo de adolescentes resucita por accidente a unas fuerzas demoníacas con un conjuro.",
            "duracion": 85,
            "imagen": "https://i.pinimg.com/564x/66/bc/d5/66bcd5f5b359e1d830967fdabbd0d5b2.jpg"
        },
        {
            "id": 4,
            "nombre": "Bastardos sin gloria",
            "descripcion": "Dos historias convergen. Una sigue a un grupo de soldados, cuya misión es matar nazis con la participación de una miembro de la resistencia alemana. La otra historia sigue a una joven judía que busca venganza por la muerte de su familia en manos de los nazis, y en cuyo cine va a reunirse la cúpula nazi en el estreno de una película.",
            "duracion": 153,
            "imagen": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjfkx-qCim1KRKU9wxRYtduFju9D_oMsbKCOS8gdIyqBx732Ke"
        },
        {
            "id": 5,
            "nombre": "El Padrino",
            "descripcion": "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo",
            "duracion": 175,
            "imagen": "https://i.pinimg.com/originals/27/49/2a/27492a953f8ac7054cd3735bf8fd4da0.jpg"
        }
    ];
    getAllMovies.mockResolvedValue(movies);
    await act(async () => render(<RouterProvider router={router} />));

    const titleMovies = screen.getAllByTestId('seleccion-pelicula-item');
    
    expect(titleMovies).toHaveLength(5);
})

test('admin select one movie and functions display availables', async () => {
    const movies = [
        {
            "id": 1,
            "nombre": "The Avengers",
            "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
            "duracion": 150,
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
        }
    ];
    getAllMovies.mockResolvedValue(movies);
    const functions = [
        {
            "tipo": "3D",
            "horarios": [
                {
                    "id": 3,
                    "horario": "22:41"
                }
            ]
        },
        {
            "tipo": "2D",
            "horarios": [
                {
                    "id": 1,
                    "horario": "18:41"
                }
            ]
        }
    ]
    getFunctionsOfMovie.mockResolvedValue(functions);
    await act(async () => render(<RouterProvider router={router} />));

    const titleMovies = screen.getAllByTestId('seleccion-pelicula-item');
    
    await act(async () => {
        userEvent.click(titleMovies[0]);
    })

    const functionsAvailables = screen.getAllByTestId('seleccion-function-item');
    
    expect(functionsAvailables).toHaveLength(2);
})

test('it display seats state from one function selected', async () => {
    const movies = [
        {
            "id": 1,
            "nombre": "The Avengers",
            "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
            "duracion": 150,
            "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
        }
    ];
    getAllMovies.mockResolvedValue(movies);
    const functions = [
        {
            "tipo": "3D",
            "horarios": [
                {
                    "id": 3,
                    "horario": "22:41"
                }
            ]
        }
    ]
    getFunctionsOfMovie.mockResolvedValue(functions);
    await act(async () => render(<RouterProvider router={router} />));

    const titleMovies = screen.getAllByTestId('seleccion-pelicula-item');
    
    await act(async () => {
        userEvent.click(titleMovies[0]);
    })

    const functionsAvailables = screen.getAllByTestId('seleccion-function-item');

    const seatsFromFunction = [
        {
            "id": 113,
            "estaLibre": false,
            "estaReservado": false,
            "estaOcupado": true,
            "columna": "A",
            "fila": "1"
        }
    ]
    getSeatsFromFunctionAdmin.mockResolvedValue(seatsFromFunction);
    await act(async () => {
        userEvent.click(functionsAvailables[0]);
    })

    const seats = screen.getByTestId('estado-asientos');

    expect(seats).toBeInTheDocument();
})