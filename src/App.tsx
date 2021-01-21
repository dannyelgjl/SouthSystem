import React from 'react';
// Router-dom
import { BrowserRouter } from 'react-router-dom';
// Routes
import Routes from './routes/routes';
// Estilo Global
import GlobalStyle from './styles/global';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
