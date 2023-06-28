import {render, screen, act} from '@testing-library/react';
import PayRejected from '../pages/PayRejected';
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";

test('render page of pay rejected successfull', async () => {

    const routes = [
        {
          path: "/movie/purchase/failure",
          element:
            <PayRejected />
        }
    ];
    const router = createMemoryRouter(routes, {
        initialEntries: ["/movie/purchase/failure"],
        initialIndex: 0,
    });
    await act(async () => render(<RouterProvider router={router} />));
    
    const payRejected = screen.getByTestId('pago-rechazado');
    
    expect(payRejected.textContent).toEqual('No se pudo completar el pago de la compra');
})