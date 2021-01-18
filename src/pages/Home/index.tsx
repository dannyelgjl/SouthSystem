import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Api service
import api from '../../services/api';
// Icons
import { MdAddShoppingCart, MdDelete, MdUpdate } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';
// Styles
import { BookList, Form, Container } from './styles'
// Imagem
import logo from '../../assets/logo/SouthSystemLogo.jpg'

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

    api.get(`volumes?q=${book}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=12`)
      .then(response => {
        console.log(response.data);
        setResults(response.data.items);
        setBook("");
      });

  }, [book, result]);

  return (
    <>
      <Container>
        <a href="https://southsystem.com.br/" target="_blank"><img src={logo} alt="South System" /></a>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={book}
            onChange={e => setBook(e.target.value)}
            placeholder="Busque seus livros..."
          />
          <button type="submit">Buscar</button>
        </Form>
      </ Container >
      <BookList>
        {result.map(book => (
          <li key={book.id}>
            <div className="container-card-book">
              <div className="image-card-book">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <span>AUTOR: {book.volumeInfo.authors}</span>
              </div>
            </div>

            <button type="button" onClick={() => { }}>
              <div>
                <BiCommentDetail size={16} color="#FFF" />
              </div>
              <span>Detalhes</span>
            </button>
          </li>
        ))}
      </BookList>
    </>
  )
}

export default Home;