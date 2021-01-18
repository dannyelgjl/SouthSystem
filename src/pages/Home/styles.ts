import styled from 'styled-components';


export const BookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: 50px;
  margin-bottom: 50px;
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
          height: 220px;
          border-radius: 4PX;
          border: 1px solid #1472b6;
          margin: 30px 10px 10px;
          object-fit: cover;
        }

        > span {
          margin-top: 15px;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
`