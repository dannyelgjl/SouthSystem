import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Api service
import api from '../../services/api';
// Icons
import { MdAddShoppingCart, MdDelete, MdUpdate } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
// Styles
import { BookList, Form, Container, Profiler } from './styles'
// Imagem
import logo from '../../assets/logo/SouthSystemLogo.jpg';

import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalContent';
import { useBookModal } from '../../context/BookContext';

import { toast } from 'react-toastify';

interface IBookVolumeInfo {
  id: string;
  volumeInfo: IImageLinks;
}

interface IImageLinks {
  title: string;
  imageLinks: {
    thumbnail: string;
  }
  authors: [];
}

const Home: React.FC = () => {
  // Estados 

  const { setBookModal } = useBookModal();

  const [book, setBook] = useState("");
  const [result, setResults] = useState<IBookVolumeInfo[]>([]);

  const [maxResults, setMaxResults] = useState('1');
  const [startIndex, setStartIndex] = useState('-');

  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();

  // Enviando dados do formulário
  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (maxResults > '40' || maxResults < '1') {
      toast.error('max results must be between 1 and 40');
    } else {
      api.get(`volumes?q=${book}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=${startIndex}`)
        .then(response => {
          if (startIndex >= response.data.totalItems || startIndex < '1') {
            toast.error(
              `Livro ${book} não encontrado`
            );
          } else {
            if (response.data.items.length > '0') {
              console.log(response.data);
              setResults(response.data.items);
              setBook("");
            }
          }
        }).catch(err => {
          // setLoading(true);
          console.log(err.response);
        });;
    }
  }, [book, result, maxResults, startIndex]);

  const detailBook = useCallback((book) => {
    setBookModal(book);

    setModalOpen(true);
  }, []);

  return (
    <>
      <Modal modalOpen={modalOpen}>
        <ModalContent setModalOpen={setModalOpen} />
      </Modal>

      <Profiler>
        <Link to="/"><img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="" /></Link>
      </Profiler>

      <Container>
        <a href="https://southsystem.com.br/" target="_blank"><img src={logo} alt="South System" /></a>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={book}
            onChange={e => setBook(e.target.value)}
            placeholder="Busque seus livros..."
          />

          <input
            type='number'
            id='startIndex'
            placeholder="Quantidade de livros..."
            value={startIndex}
            onChange={e => setStartIndex(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </Form>
      </ Container >


      <BookList>
        {result.map(book => (
          <li key={book.id}>
            <div className="container-card-book">
              <div className="image-card-book">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <span>AUTOR: {book.volumeInfo.authors}</span>
              </div>
            </div>

            <button type="button" onClick={() => detailBook(book)}>
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