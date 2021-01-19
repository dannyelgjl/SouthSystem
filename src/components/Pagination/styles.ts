import styled from 'styled-components';


export const Pages = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 80px 0 50px 40px;
  width: 150px;
  padding: 10px;

  li {
    a {
      color: #fff;
      background: #fe6e00
    }
  }
`;