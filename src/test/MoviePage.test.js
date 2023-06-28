import {render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieInfo from '../components/MovieInfo';
import SeatPage from '../pages/SeatPage';
import { getMovieById, getFunctionsOfMovie } from '../services/MovieService';
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";

jest.mock('../services/MovieService');

beforeEach(() => { 
    getMovieById.mockClear();
    getFunctionsOfMovie.mockClear();
});

test('render title and description to one movie', async () => {
    const movie = {
        "id": 1,
        "nombre": "The Avengers",
        "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
        "duracion": 150,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
    }
    const functions = [];
    getMovieById.mockResolvedValueOnce(movie);
    getFunctionsOfMovie.mockResolvedValueOnce(functions);
    
    await act(async () => render(<MovieInfo />));

    const title = screen.getByTestId('titulo-pelicula'); 
    const description = screen.getByTestId('descripcion-pelicula');

    expect(title).toHaveTextContent('The Avengers');
    expect(description).toHaveTextContent('El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.');

})

test('render info of the functions one movie', async () => {
    const routes = [
        {
          path: "/",
          element:
            <MovieInfo />
        },
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });

    const movie = {
        "id": 1,
        "nombre": "The Avengers",
        "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
        "duracion": 150,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
    }
    const functions = [
        {
            "tipo":"3D",
            "horarios":[
                {
                    "id":3,
                    "horario":"18:28"
                },
                {
                    "id":4,
                    "horario":"20:00"
                }
            ]
        },
        {
            "tipo":"2D",
            "horarios":[
                {
                    "id":1,
                    "horario":"14:28"
                }
            ]
        }
    ]
    getMovieById.mockResolvedValueOnce(movie);
    getFunctionsOfMovie.mockResolvedValueOnce(functions);
    
    await act(async () => render(<RouterProvider router={router} />));

    const typeFunctions = screen.getAllByTestId('tipo-funcion'); 
    const timeFunctions = screen.getAllByTestId('horario-funcion');
    const times = timeFunctions.map(e=>e.textContent);
    expect(typeFunctions).toHaveLength(2);
    expect(typeFunctions[0]).toHaveTextContent('3D');
    expect(typeFunctions[1]).toHaveTextContent('2D');
    expect(times).toEqual(['18:28', '20:00', '14:28']);
})


test('user click on one function and redirect to SeatPage', async () => {
    const routes = [
        {
          path: "/",
          element:
            <MovieInfo />
        },
        {
            path: "/movie/seats/:movie/funcion/:idFunction",
            element:
              <SeatPage />
  
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });


    const movie = {
        "id": 1,
        "nombre": "The Avengers",
        "descripcion": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
        "duracion": 150,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_888996-MLA32569507268_102019-O.jpg"
    }
    const functions = [
        {
            "tipo":"3D",
            "horarios":[
                {
                    "id":3,
                    "horario":"18:28"
                },
                {
                    "id":4,
                    "horario":"20:00"
                }
            ]
        },
        {
            "tipo":"2D",
            "horarios":[
                {
                    "id":1,
                    "horario":"14:28"
                }
            ]
        }
    ]

    getMovieById.mockResolvedValueOnce(movie);
    getFunctionsOfMovie.mockResolvedValueOnce(functions);
    
    await act(async () => render(<RouterProvider router={router} />));

    const timeFunctions = screen.getAllByTestId('horario-funcion');

    await act(async () => {
        userEvent.click(timeFunctions[0]);
    })

    const seatsPage = screen.getByTestId('pagina-de-asientos');
    expect(seatsPage).toBeVisible();
}) 