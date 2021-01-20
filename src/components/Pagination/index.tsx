import React from 'react';
// Estilos
import { Pages, Container } from './styles';

interface IProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (params: number) => void;
}

const Pagination: React.FC<IProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Pages className="pagination">
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)} >
              {number}
            </button>
          </li>
        ))}
      </Pages>
    </Container>
  )
}

export default Pagination;