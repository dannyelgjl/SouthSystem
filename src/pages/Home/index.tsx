import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Api service
import api from '../../services/api';
// Styles
import { BookList } from './styles'

interface IBookVolumeInfo {
  id: string;
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
  // Estados 
  const [book, setBook] = useState("");
  const [result, setResults] = useState<IBookVolumeInfo[]>([]);

  // Enviando dados do formulário
  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    api.get(`volumes?q=${book}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=9`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.items);
        setBook("");
      });
  }, [book, result]);

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

      <BookList>
        {result.map(book => (
          <li key={book.id}>
            <div className="container-card-book">
              <div className="image-card-book">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <span>AUTOR: {book.volumeInfo.authors}</span>
              </div>
              <div className="text-card-book">

              </div>
            </div>
          </li>
        ))}
      </BookList>

    </>
  )
}

export default Home;