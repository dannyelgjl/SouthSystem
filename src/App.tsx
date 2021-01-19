import React from 'react';
// Componentes
import Header from './components/Header';
import Home from './pages/Home';
// Estilo Global
import GlobalStyle from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
