import styled from 'styled-components';
import { shade } from 'polished';
import books from '../../assets/images/books.jpg';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${books}) no-repeat center;
  height: 600px;
  width: 100%;

   a {
     img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
    }
  }
`;

export const FavoriteTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  a {
      background-color: var(--orange);
      width: auto;
      padding: 8px;
      border-radius: 8px;
      color: #fff;
      transition: background-color 0.2s;
    
      &:hover {
        background: ${shade(0.2, '#fe6e00')};
      }
    }

  h1 {
    background-color: var(--orange);
    width: auto;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;
    
    &:hover {
      background: ${shade(0.2, '#fe6e00')};
    }

    & + h1 {
      margin-left: 8px;
    }
  }
`

export const ListFavorites = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 80px 0 50px 40px;
  width: 150px;
  padding: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #232129;
    border-radius: 4px;
    padding: 20px;

    .container-card-book {
      flex-direction: row;
      display: flex;

      .image-card-book {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 220px;
          height: 280px;
          border-radius: 4PX;
          border: 1px solid var(--orange);
          margin: 30px 10px 10px;
          object-fit: cover;
        }

        > span {
          margin-top: 15px;
          font-size: 18px;
          font-weight: bold;
          color: var(--white);
          min-height: 100px;
        }
      }
    }
  }
`