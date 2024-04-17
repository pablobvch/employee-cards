// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConsultaLegajo from './ConsultaLegajo';

test('muestra un mensaje de error cuando el DNI es inválido', async () => {
  render(<ConsultaLegajo />);

  const input = screen.getByPlaceholderText('Ingrese DNI');
  fireEvent.change(input, { target: { value: '12345' } });

  const consultarButton = screen.getByText('Consultar');
  fireEvent.click(consultarButton);

  await waitFor(() => {
    const errorMessage = screen.getByText(
      'El DNI debe tener al menos 7 dígitos.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
