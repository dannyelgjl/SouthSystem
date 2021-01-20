import styled, { css } from 'styled-components';
import { shade } from 'polished';
import books from '../../assets/images/books.jpg';

interface FormProps {
  hasError: boolean;
}

const media = {
  cards5: "@media(max-width: 1832px)",
  cards4: "@media(max-width: 1532px)",
  cards3: "@media(max-width: 1241px)",
  cards2: "@media(max-width: 935px)",
  cards1: "@media(max-width: 629px)",
  littleCards: "@media(max-width: 320px)",
  logo: "@media(max-width: 411px)",
}

const input = {
  input: "@media(max-width: 280px)"
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${books}) no-repeat center;
  height: 600px;
  width: 100%;

  a {
    > img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
      border-radius: 50%;

      ${media.logo} {
        display: none;
      } 
    }
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 600px;
  padding: 6px;

  input {
    flex: 1;
    height: 50px;
    max-width: 700px;
    border: 0;
    border-radius: 12px 0 0 12px;
    padding: 10px;
    color: #fe6e00;
    border: 2px solid #fff;
    border-right: 0;

    ${input.input} {
        width: 100px;
      } 

    ${(props) => props.hasError && 
      css`
        border-color: #c53030;
      ` }

      &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 80px;
    height: 50px;
    border-radius: 0 12px 12px 0;
    background: #fe6e00;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    
    &:hover {
      background: ${shade(0.2, '#fe6e00')};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #fff;
  margin-left: 8px;
  border-radius: 8px;
  background-color: #c53030; 
  padding: 2px;
`;

export const BookList = styled.ul`
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
    padding: 0 20px 0 0
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
    
    .container-card-book {
      flex-direction: row;
      display: flex;

      .image-card-book {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
          width: 220px;
          height: 280px;
          border-radius: 4PX;
          border: 1px solid #fe6e00;
          margin: 30px 10px 10px;
          object-fit: cover;

          ${media.littleCards} {
            width: 180px;
            height: 240px;
          }
        }

        > span {
          margin-top: 15px;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          min-height: 100px;
        }
      }
    }

   > button {
      background: #fe6e00;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
      display: flex;
      align-items: center;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`


