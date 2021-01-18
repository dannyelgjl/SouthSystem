  
import styled from 'styled-components';
import { darken } from 'polished';
// import { Link } from "react-router-dom";

export const Container = styled.header`
  background: transparent;
  padding: 0 30px;
  height: 64px;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    span.logo {
      display: block;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    span {
      > img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
    a {
      font-weight: bold;
      color: #fff;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid #eee;

  div {
    text-align: left;
    margin-right: 10px;
    

    strong {
      display: block;
      color: #fff;
      img {
        margin-left: 5px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #fe6e00;
      }
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      transition: color 0.2s;
        &:hover {
        color: ${darken(0.03, '#fe6e00')};
      }
    }
  }
`;

export const SignOut = styled.div`
  button {
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: #fff;
    padding: 15px;
    transition: background 0.2s;
    width: 80px;
    > svg {
      margin-left: 30px
    }
    p {
      position: absolute;
    }
    &:hover {
      background: ${darken(0.03, '#fe6e00')};
    }
  }
`;