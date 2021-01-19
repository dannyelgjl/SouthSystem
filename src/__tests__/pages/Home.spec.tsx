import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react'
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

    const searchBooks = getByPlaceholderText('Busque seus livros...');
    const quantityBooks = getByPlaceholderText('Quantidade de livros...');
    const seacrchButtonElement = getByText('Buscar');


    fireEvent.change(searchBooks, { target: { value: 'javascript' } });
    fireEvent.change(quantityBooks, { target: { value: '12' } });
    fireEvent.click(seacrchButtonElement);
  });
});

describe('Home Page', () => {
  it('Dados não existentes', () => {

    const { getByPlaceholderText, getByText } = render(<Home />);

    const searchBooks = getByPlaceholderText('Busque seus livros...');
    const quantityBooks = getByPlaceholderText('Quantidade de livros...');
    const seacrchButtonElement = getByText('Buscar');


    fireEvent.change(searchBooks, { target: { value: 'kjgkasjfkas' } });
    fireEvent.change(quantityBooks, { target: { value: '12' } });
    fireEvent.click(seacrchButtonElement);
  });
})