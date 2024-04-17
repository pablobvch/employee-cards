import { NextResponse, NextRequest } from 'next/server';
import empleados from './empleados';
import { Empleado } from '@/app/models/empleado';

const findEmpleadoByDni = (dni: number): Empleado | undefined =>
  empleados.find((empleado: Empleado) => empleado.dni === dni);

export async function GET(
  request: NextRequest,
  { params }: { params: { dni: string } }
) {
  const dni = Number(params.dni);

  const empleado = findEmpleadoByDni(dni);

  if (!empleado) {
    return NextResponse.json(
      { message: 'Empleado no encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(empleado, { status: 200 });
}
