import React from 'react';

import { Pages } from './styles';

interface IProps {
  postsPerPage: number;
  totalPosts: number;
}

const Pagination: React.FC<IProps> = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pages className="pagination">
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </Pages>
    </nav>
  )
}

export default Pagination;