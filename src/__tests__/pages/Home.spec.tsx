import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Home from '../../pages/Home';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
});

describe('Home Page', () => {
  it('Dados existentes', () => {

    const { getByPlaceholderText, getByText } = render(<Home />);

    const searchBooks = getByPlaceholderText('Busque aqui seus livros favoritos...');
    const seacrchButtonElement = getByText('Buscar');


    fireEvent.change(searchBooks, { target: { value: 'javascript' } });
    fireEvent.click(seacrchButtonElement);
  });
});
