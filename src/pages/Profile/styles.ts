import styled from 'styled-components';
import { shade } from 'polished';


const media = {
  repository: "@media(max-width: 608px)",
  repositoryMobile: "@media(max-width: 462px)",
  repositoryLittle: "@media(max-width: 280px)",
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4px;
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  ${media.repositoryMobile} {
    padding: 0 20px 0 80px;
  }

  ${media.repositoryLittle} {
    margin-left: 40px
  }

  header {
    display: flex;
    align-items: center;

    strong {
      transition: color 0.2s;
    
      &:hover {
        color: ${shade(0.2, '#fe6e00')};
      }
    }

    a {
      color: var(--white);
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 2px solid var(--orange);
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: var(--white)
      }
      h2 {
        color: var(--white);
        margin-top: 8px;
        transition: color 0.2s;
    
        &:hover {
          color: ${shade(0.2, '#fe6e00')};
        }

        a {
        svg {
          margin-left: 10px;
          transition: transform 0.5s;
          
          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        transition: color 0.2s;
    
        &:hover {
          color: ${shade(0.2, '#fe6e00')};
        }
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
  width: 600px;
  max-width: 700px;

  ${media.repository} {
    width: 460px
  } 

  ${media.repositoryMobile} {
    width: 340px;
    margin-left: 60px
  } 

  ${media.repositoryLittle} {
    margin-left: 120px
  }

  
  h1 {
    color: var(--white);
    margin-bottom: 10px;
  }
  a {
    background: var(--white);
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px
    }
    &:hover {
      transform: translateX(10px)
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; 
    }
    div {
      margin-left: 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`