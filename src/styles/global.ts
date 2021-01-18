import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`