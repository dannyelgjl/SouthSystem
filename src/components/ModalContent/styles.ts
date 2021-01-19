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
      margin-bottom: 5px;
    }
  }

  .content-general {
    flex-direction: column;

    h2 {
      margin-bottom: 10px
    }

    span {
      & + span {
        margin-left: 20px;
      }
    }

    > h3 {
      margin-top: 10px;
      font-size: 15px;
      padding: 0 40px 0 40px;
    }
  }
`