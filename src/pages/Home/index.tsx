import React, { useEffect, useState, useCallback, FormEvent } from 'react';
// Componentes
import Profile from '../../components/Profile';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
// Context
import { useFavoriteBook } from '../../hooks/FavoritesBooks';
// Router-dom
import { Link } from 'react-router-dom';
// Api service
import api from '../../services/api';
// Icons
import { MdFavorite } from 'react-icons/md';
import { IoRemoveCircleOutline } from 'react-icons/io5';
// Styles
import { BookList, Form, Container, QuantityFavorites } from './styles'
// Imagem
import logo from '../../assets/logo/SouthSystemLogo.jpg';
import noImage from '../../assets/images/sem-foto.jpg';
// Toast
import { toast } from 'react-toastify';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';


const Home: React.FC = () => {
  const { book, setFavorites, removeFavorites } = useFavoriteBook();

  const [textFilter, setTextFilter] = useState("");
  const [books, setBooks] = useState<IBookVolumeInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
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
  }, [textFilter]);

  const removeBook = useCallback((book: IBookVolumeInfo) => {
    removeFavorites(book.id);

    toast.error(`Você removeu ${book.volumeInfo.title} dos seus favoritos 😥`);
  }, []);

  return (
    <>
      <Profile />
      <Container>
        <a href="https://southsystem.com.br/" target="_blank" rel="noreferrer">
          <img src={logo} alt="South System" />
        </a>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
            placeholder="Busque aqui seus livros favoritos..."
          />
          <Button>Buscar</Button>
        </Form>
      </ Container >
      <Pagination postsPerPage={postsPerPage} totalPosts={books.length} paginate={paginate} />

      <QuantityFavorites>
        <h3>Página: <span>{currentPage}</span></h3>
        <Link to="/favorites"><h3>Livros Favoritados <MdFavorite size={18} color="#ff0f0f" /> : <span>{book.length || 0}</span></h3></Link>
      </QuantityFavorites>
      { !currentPosts.length ? (
        <Loading />
      ) : (
          <BookList>
            {currentPosts.map(book => (
              <li key={book.id}>
                <div className="container-card-book">
                  <div className="image-card-book">
                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noImage} alt={book.volumeInfo.title} />
                    <span>{book.volumeInfo.title}</span>
                  </div>
                </div>

                <Modal book={book} />

                <Button onClick={() => setFavorites(book)}>
                  <div>
                    <MdFavorite size={16} color="#fff" />
                  </div>
                  <span>Favoritar</span>
                </ Button>

                <Button style={{ background: "#AF0B0B" }} onClick={() => removeBook(book)}>
                  <div>
                    <IoRemoveCircleOutline size={16} color="#fff" />
                  </div>
                  <span>Remover favorito</span>
                </ Button>
              </li>
            ))}
          </BookList>
        )}

    </>
  )
}

export default Home;