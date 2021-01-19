import styled from 'styled-components';
import { shade } from 'polished';
import books from '../../assets/images/books.jpg';
import { darken } from 'polished';


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
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 700px;

  > input {
    width: 400px;
    height: 50px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #fe6e00;
    border: 2px solid #fff;
    border-right: 0;
  }

  input {
      & + input {
        border-radius: 0;
        width: 185px;
        margin-left: 5px;
      }
    }
  
  button {
    width: 80px;
    height: 50px;
    border-radius: 0 6px 6px 0;
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

export const BookList = styled.ul`
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

        > img {
          width: 220px;
          height: 280px;
          border-radius: 4PX;
          border: 1px solid #fe6e00;
          margin: 30px 10px 10px;
          object-fit: cover;
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

    button {
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