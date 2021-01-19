import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Componentes
import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalContent';
import Profile from '../../components/Profile';
import Pagination from '../../components/Pagination';
// Context
import { useBookModal } from '../../context/BookContext';
// Api service
import api from '../../services/api';
// Icons
import { BiCommentDetail } from 'react-icons/bi';
// Styles
import { BookList, Form, Container } from './styles'
// Imagem
import logo from '../../assets/logo/SouthSystemLogo.jpg';
// Toast
import { toast } from 'react-toastify';


export interface IBookVolumeInfo {
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
  const { setBookModal } = useBookModal();

  const [textFilter, setTextFilter] = useState("");
  const [books, setBooks] = useState<IBookVolumeInfo[]>([]);
  const [maxResults, setMaxResults] = useState('1');
  const [startIndex, setStartIndex] = useState('5');
  const [modalOpen, setModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  useEffect(() => {
    const renderBooksDefault = async () => {
      setLoading(true);
      const res = await api.get('volumes?q=flowers&filter=free-ebooks&key=AIzaSyBztfyfAcTV_yfZX951VfCMoIDmQ7Cb5Ec');
      setBooks(res.data.items);
      setLoading(false);
    }

    renderBooksDefault();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);

  // Enviando dados do formulário
  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (maxResults > '40' || maxResults < '1') {
      toast.error('max results must be between 1 and 40');
    } else {
      api.get(`volumes?q=${textFilter}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=${startIndex}`)
        .then(response => {
          if (startIndex >= response.data.totalItems || startIndex < '1') {
            toast.error(
              `Livro ${textFilter} não encontrado`
            );
          } else {
            if (response.data.items.length > '0') {
              console.log(response.data);
              setBooks(response.data.items);
              setTextFilter("");
            }
          }
        }).catch(err => {
          toast.error('Você não digitou nada no campo de busca...😥')
        });;
    }
  }, [books, textFilter, maxResults, startIndex]);


  // Detalhes do livro
  const detailBook = useCallback((book) => {
    setBookModal(book);

    setModalOpen(true);
  }, []);

  return (
    <>
      <Modal modalOpen={modalOpen}>
        <ModalContent setModalOpen={setModalOpen} />
      </Modal>
      <Profile />

      <Container>
        <a href="https://southsystem.com.br/" target="_blank"><img src={logo} alt="South System" /></a>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
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
        {currentPosts.map(book => (
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

      <Pagination postsPerPage={postsPerPage} totalPosts={books.length} />
    </>
  )
}

export default Home;