import styled from 'styled-components';

export const Container = styled.div`
`

export const Pages = styled.ul`
  display: flex;
  padding: 8px 0 10px 20px;
  margin-top: 20px;
  
  li {
    button {
      color: #fff;
      background: #fe6e00;
      margin-left: 30px;
      border: 0;
      border-radius: 8px;
      width: 40px;
      height: 40px;

      transition: transform 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;