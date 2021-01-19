import styled from 'styled-components';


export const Content = styled.div`
  display: column;
  align-items: center;
  text-align: center;
  
  .content-img {
    flex-direction: column;
    > img {
      width: 200px;
      height: 250px;
      border: 1px solid #fe6e00;
    }
  }

  .content-general {
    flex-direction: column;
    > span {
      
    }
  }
`