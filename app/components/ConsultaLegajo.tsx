'use client';
import React, { useState } from 'react';
import { Empleado } from '../models/empleado';
import { getEmpleadoByDni } from './api';
import Loader from './Loader';

const ConsultaLegajo = () => {
  const [dni, setDni] = useState<string>('');
  const [empleado, setEmpleado] = useState<Empleado | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const consultar = async () => {
    const regex = /^\d{7,}$/;
    if (!regex.test(dni)) {
      setErrorMessage('El DNI debe tener al menos 7 dígitos.');
      return;
    } else {
      setErrorMessage(null);
    }
    setError(null);
    try {
      setLoading(true);
      const empleado = await getEmpleadoByDni(dni);
      setLoading(false);
      setEmpleado(empleado);
    } catch (error) {
      setLoading(false);
      setEmpleado(null);
      const errorMessage = (error as Error).message;
      setEmpleado(null);
      setError(errorMessage);
    }
  };

  const limpiar = () => {
    setDni('');
    setEmpleado(null);
    setError(null);
    setErrorMessage(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        placeholder="Ingrese DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={consultar}
      >
        Consultar
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={limpiar}
      >
        Limpiar
      </button>
      {error && (
        <div className="mt-4 p-4 border border-red-500 rounded shadow bg-red-100">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      {empleado && (
        <div className="mt-4 p-4 border border-gray-200 rounded shadow">
          <h2 className="text-xl font-bold">{empleado.nombre}</h2>
          <p>Nacimiento: {empleado.nacimiento}</p>
          <p>Nro de Legajo: {empleado.nroLegajo}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultaLegajo;
