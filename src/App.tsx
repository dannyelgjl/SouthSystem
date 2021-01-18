import React from 'react';
// Componentes
import Home from './pages/Home';
// Estilo Global
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
