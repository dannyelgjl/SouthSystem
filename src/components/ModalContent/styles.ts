import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #FFE5C7;
  border-radius: 8px;
  width: 1200px;
  height: 500px;
  color: #000;
  
  button {
    position: absolute;
    right: 380px;
    top: 720px;
    border: 0;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background: #fe6e00; 
    color: #fff;
    transition: transform 0.5s;
    
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;

  .content-img {
    flex-direction: column;
    > img {
      width: 200px;
      height: 250px;
      border: 1px solid #fe6e00;
      margin-right: 20px;

      transition: transform 0.5s;
    
      &:hover {
        transform: scale(0.9);
      }
    }
  }

  .content-general {
    flex-direction: column;
    margin-left: 5px;

    h2 {
      margin-bottom: 10px;
      color: #fe6e00;
    }

    span {
      & + span {
        margin-left: 20px;
      }
    }

    span {
      background-color: #fe6e00;
      padding: 4px;
      border-radius: 4px;
      color: #fff;
    }

    > h3 {
      margin-top: 10px;
      font-size: 15px;
      padding: 8px 22px 8px 22px;
      background-color: #fe6e00;
      color: #fff;
      border-radius: 8px;
    }
  }
`