import styled from 'styled-components';

export const ProfileStyling = styled.div`
    position: absolute;
    top: 0;
    left: 0;
   
   > a {  
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;

     transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }

    > span {
        color: #fff;
        background: #fe6e00;
        border-radius: 4px;
        padding: 2px;
        margin-top: 6px;
      }

    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #fe6e00;
      margin: 8px 0 0 12px;
    }
  }
`;