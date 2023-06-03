import {render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import { getAllMovies } from '../services/MovieService';
import ListMovie from '../components/ListMovie';

jest.mock('../services/MovieService');

beforeEach(() => getAllMovies.mockClear())


test('render 5 movies in billboard', async () => {
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
    getAllMovies.mockResolvedValueOnce(movies);
    
    await act( async () => render(<ListMovie />));

    expect(screen.getByText('The Avengers')).toBeInTheDocument();
    expect(screen.getByText('John Wick')).toBeInTheDocument();
    expect(screen.getByText('Evil Dead')).toBeInTheDocument();
    expect(screen.getByText('Bastardos sin gloria')).toBeInTheDocument();
    expect(screen.getByText('El Padrino')).toBeInTheDocument();

})
