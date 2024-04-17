import { Empleado } from '../models/empleado';

const getEmpleadoByDni = async (dni: string): Promise<Empleado> => {
  const response = await fetch(`/api/empleados/${dni}`);
  if (response.ok) {
    const data: Empleado = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

export { getEmpleadoByDni };
