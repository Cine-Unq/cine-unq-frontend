import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";
import CreateSalaPage from '../pages/CreateSalaPage';
import { saveLayoutSala } from '../services/SeatService';

jest.mock('../services/SeatService');

beforeEach(() => saveLayoutSala.mockClear())

test('render page create sala', async () => {
    const routes = [
        {
        path: "/",
        element:
            <CreateSalaPage/>
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));
    const pageCreateSala = screen.getByTestId('pagina-de-creacion-sala');
    expect(pageCreateSala).toBeInTheDocument();
})

test('create one sala and save', async () => {
    saveLayoutSala.mockResolvedValue({});
    const routes = [
        {
        path: "/",
        element:
            <CreateSalaPage/>
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));

    const inputNameSala = screen.getByTestId('input-nombre-sala');
    const inputColumnasSala = screen.getByTestId('input-cantidad-columnas');
    const inputFilasSala = screen.getByTestId('input-cantidad-filas');
    const inputFormatSala = screen.getByTestId('input-formato-sala');
    const buttonCreateSala = screen.getByTestId('boton-crear-sala');
    await act(async () => {
        await userEvent.type(inputNameSala, 'Sala1');
        await userEvent.type(inputColumnasSala, '6');
        await userEvent.type(inputFilasSala, '6');
        await userEvent.selectOptions(inputFormatSala, '2D');
        await userEvent.click(buttonCreateSala);
    });
    const buttonSaveSala = screen.getByTestId('boton-guardar-sala');
    await act(async () => {
        await userEvent.click(buttonSaveSala);
    })
    const confirm = screen.getByTestId("confirmar-creacion-sala");
    await act(async () => {
        await userEvent.click(confirm);
    })
    const msgSuccessfull = screen.getByTestId('msg-sala-creada');
    expect(msgSuccessfull).toHaveTextContent('Se guardo correctamente la sala')
}) 