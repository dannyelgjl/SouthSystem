import styled from 'styled-components';

const media = {
  text: "@media(max-width: 1239px)",
  text1: "@media(max-width: 320px)",
  
  bookImg: "@media(max-width: 504px)",
  bookImgLittle: "@media(max-width: 435px)",
}

export const Container = styled.div`
  width: 100%;
  height: 1920px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
  padding: 100px 80px 80px 80px;
  border-radius: 12px;
  background: #fff;
  width: 70%;
  max-height: 100%;
  max-width: 1000px;

  .content-img {
    flex-direction: column;
    > img {
      width: 200px;
      height: 250px;
      border: 1px solid #fe6e00;
      margin-right: 20px;
      transition: transform 0.5s;
    
      &:hover {
        transform: scale(1.1);
      }
      
      ${media.bookImg} {
        width: 150px;
        height: 200px;
      }
      ${media.bookImgLittle} {
        width: 100px;
        height: 150px;
      }
    }
  }
`
export const ContentGeneral = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    padding: 10px;

    > a {
      color: #fff;
      background-color: green;
      border-radius: 8px;
      padding: 8px;
      transition: transform 0.5s;

      & + a {
        margin-top: 10px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    ${media.text} {
      margin-top: 5px;
    }

    h2 {
      margin-bottom: 10px;
      color: #fe6e00;
    }
    span {
      background-color: #fe6e00;
      padding: 4px;
      border-radius: 4px;
      color: #fff;

      ${media.text1} {
        width: 100px;
      }

        & + span {
        margin-top: 10px;
      }
    }

    > h3 {
      display: block;
      margin-top: 10px;
      font-size: 15px;
      padding: 8px 22px 8px 22px;
      background-color: #fe6e00;
      color: #fff;
      border-radius: 8px;
      text-overflow: ellipsis; 
      overflow: hidden;
      white-space: nowrap;
      max-height: 400px;
      margin-bottom: 10px;
      
      ${media.text1} {
        width: 100px;
      }
    }
`
export const ButtonModal = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  background-color: transparent;
  border: 0;
  transition: transform 0.5s;

    &:hover {
      transform: scale(1.2);
    }
`