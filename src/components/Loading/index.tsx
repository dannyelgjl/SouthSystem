import React from 'react';
// Estilos
import { StyledSpinner, Container } from './styles';


const Loading: React.FC = () => {
  return (
    <Container>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner >
    </Container>
  )
}

export default Loading;