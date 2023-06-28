import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Login from '../pages/Login';
import Authentication from '../components/Authentication';
import BillboardCine from '../pages/BillboardCine';
import { loginUser } from '../services/UserService'; 
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

jest.mock('../services/UserService');

beforeEach(() => loginUser.mockClear())


test('render login successfully', async () => {
    render(<Login />);
  
    expect(screen.getByText('Bienvenido de vuelta')).toBeInTheDocument();
    expect(screen.getByText('Usuario')).toBeInTheDocument();
    expect(screen.getByText('Contraseña')).toBeInTheDocument();
    expect(screen.getByText('Iniciar Sesion')).toBeInTheDocument();

})

test('user write wrong user and password', async () => {
    loginUser.mockRejectedValueOnce(()=> ({message:"Contraseña o usuario incorrectos"}));
    render(<Login />);

    const inputUser = screen.getByTestId('input-usuario');
    const inputPassword = screen.getByTestId('input-contrasenia');
    const button = screen.getByTestId('boton-sesion')
    await act(async () => {
      await userEvent.type(inputUser, 'miguel');
      await userEvent.type(inputPassword, '1');
      await userEvent.click(button);
    });
    expect(screen.getByText('Contraseña o usuario incorrectos')).toBeInTheDocument();
})

test('user logged successfully and redirect to home', async () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwicm9sIjpbeyJhdXRob3JpdHkiOiJVU0VSIn1dLCJpYXQiOjE2ODU3NTE3NDksImV4cCI6MTY4NjY1MTc0OX0.b9X8jfnDzR85qQd_lYRwnuM3UKYyU6v8sCu1HylGinM'
  loginUser.mockResolvedValueOnce({accessToken: token});
  
  const routes = [
    {
      path: "/billboard/movies",
      element:
        <Authentication roles={["USER", "ADMIN"]}>
          <BillboardCine />
        </Authentication>,
    },
    {
      path: "/",
      element:
        <Login />

    }
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/billboard/movies"],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  const inputUser = screen.getByTestId('input-usuario');
  const inputPassword = screen.getByTestId('input-contrasenia');
  const button = screen.getByTestId('boton-sesion')
  await act(async () => {
    userEvent.type(inputUser, 'miguel');
    userEvent.type(inputPassword, '123456');
    userEvent.click(button);
  });

  const billboard = screen.getByTestId('pagina-billboard');
  expect(billboard).toBeVisible();
})

