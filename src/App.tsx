import React from 'react';
// Componentes
import Header from './components/Header';
import Home from './pages/Home';
// Estilo Global
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
