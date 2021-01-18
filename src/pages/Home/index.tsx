import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Api service
import api from '../../services/api';

interface IBookVolumeInfo {
  title: string;
  volumeInfo: IImageLinks;

}

interface IImageLinks {
  imageLinks: {
    thumbnail: string;
  }
  authors: [];
}

const Home: React.FC = () => {
  const [book, setBook] = useState("");
  const [result, setResults] = useState<IBookVolumeInfo[]>([]);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    api.get(`volumes?q=${book}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=10`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.items);
        setBook("");
      });
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

      {result.map(book => (
        <>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          autor: <span>{book.volumeInfo.authors}</span>
        </>
      ))}
    </>
  )
}

export default Home;