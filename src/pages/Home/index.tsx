import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Api service
import api from '../../services/api';



const Home: React.FC = () => {
  const [book, setBook] = useState("");
  const [results, setResults] = useState([]);


  // useEffect(() => {

  // }, []);

  // const handleChange = useCallback((event) => {
  //   const book = event.targe.value;

  //   setBook(book);
  // }, []);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    api.get(`volumes?q=${book}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=40`)
      .then(response => {
        console.log(response.data)
      })

    console.log(book);
  }, [book]);

  return (
    <>
      <h1>Buscar Livros</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={e => setBook(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

    </>
  )
}

export default Home;