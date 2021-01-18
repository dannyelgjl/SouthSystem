import React, { useEffect, useState } from 'react';
// Api service
import api from '../../services/api';


const Home: React.FC = () => {
  useEffect(() => {
    api.get(`volumes?q=flowers&filter=free-ebooks&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}`).then(response => {
      console.log(response.data.items)
    })
  }, []);

  return (
    <h1>South System</h1>
  )
}

export default Home;