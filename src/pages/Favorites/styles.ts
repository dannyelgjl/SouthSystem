import styled from 'styled-components';
import { shade } from 'polished';
import books from '../../assets/images/books.jpg';

const media = {
  cards5: "@media(max-width: 1832px)",
  cards4: "@media(max-width: 1532px)",
  cards3: "@media(max-width: 1241px)",
  cards2: "@media(max-width: 935px)",
  cards1: "@media(max-width: 629px)",
  title: "@media(max-width: 516px)",
  littleCards: "@media(max-width: 320px)",
  littleCards1: "@media(max-width: 280px)",
}


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

  ${media.cards5} {
    margin: 12px;
  } 


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

  ${media.cards5} {
    grid-template-columns: repeat(5, 1fr);
  } 

  ${media.cards4} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.cards3} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.cards2} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.cards1} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px 0 0;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #232129;
    border-radius: 4px;
    padding: 20px;

    ${media.littleCards} {
      width: 250px;
    }

    ${media.littleCards} {
      width: 220px;
    }

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

          ${media.littleCards} {
            width: 180px;
            height: 240px;
          }

          ${media.littleCards} {
            width: 160px;
            height: 200px;
          }
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