import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Componentes
import Profile from '../../components/Profile';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
// Context
import { useFavoriteBook } from '../../hooks/FavoritesBooks';
// Api service
import api from '../../services/api';
// Icons
import { MdFavorite } from 'react-icons/md';
// Styles
import { BookList, Form, Container } from './styles'
// Imagem
import logo from '../../assets/logo/SouthSystemLogo.jpg';
// Toast
import { toast } from 'react-toastify';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';


const Home: React.FC = () => {
  const { book, setFavorites } = useFavoriteBook();

  const [textFilter, setTextFilter] = useState("");
  const [books, setBooks] = useState<IBookVolumeInfo[]>([]);
  const [inputError, setInputError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    const renderBooksDefault = async () => {
      const response = await api.get(`volumes?q=flowers&filter=free-ebooks&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=40`);
      setBooks(response.data.items);
    }

    renderBooksDefault();
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Enviando dados do formulário
  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!textFilter) {
      toast.error('Você não digitou nada no campo de busca...😥');

      return;
    }

    api.get(`volumes?q=${textFilter}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOK}&maxResults=40`)
      .then(response => {
        setBooks(response.data.items);

        setTextFilter("");
      }).catch(err => {
        console.log(err);
      });
  }, [textFilter, books]);

  return (
    <>
      <Profile />

      <Container>
        <a href="https://southsystem.com.br/" target="_blank"><img src={logo} alt="South System" /></a>

        <Form hasError={!!inputError} onSubmit={handleSubmit}>
          <input
            type="text"
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
            placeholder="Busque aqui seus livros favoritos..."
          />

          <button type="submit">Buscar</button>
        </Form>
      </ Container >
      <Pagination postsPerPage={postsPerPage} totalPosts={books.length} paginate={paginate} />

      <button>Favoritos <span>{book.length || 0}</span></button>

      <BookList>
        {currentPosts.map(book => (
          <li key={book.id}>
            <div className="container-card-book">
              <div className="image-card-book">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <span>AUTOR: {book.volumeInfo.authors}</span>
              </div>
            </div>

            <button onClick={() => setFavorites(book)}>
              <div>
                <MdFavorite size={16} color="#fff" />
              </div>
              <span>Favoritar</span>
            </ button>

            <Modal book={book} />
          </li>
        ))}
      </BookList>
    </>
  )
}

export default Home;