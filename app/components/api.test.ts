// @ts-nocheck
import { getEmpleadoByDni } from './api';
import empleados from '../api/empleados/[dni]/empleados';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(empleados[0]),
  })
);

describe('getEmpleadoByDni', () => {
  it('debería devolver un empleado cuando se le proporciona un DNI válido', async () => {
    const empleado = await getEmpleadoByDni('12345678');
    expect(empleado).toEqual(empleados[0]);
  });

  it('debería lanzar un error cuando se le proporciona un DNI no válido', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    await expect(getEmpleadoByDni('99999999')).rejects.toThrow(
      'Empleado no encontrado'
    );
  });
});
