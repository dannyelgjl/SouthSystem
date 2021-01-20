import React from 'react';
// Hooks
import { useFavoriteBook } from '../../hooks/FavoritesBooks';
// Router-dom
import { Link } from 'react-router-dom';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';
// Icon
import { MdFavorite } from 'react-icons/md';
// logo
import logo from '../../assets/logo/SouthSystemLogo.jpg';
// Estilizações
import { ListFavorites, Container, FavoriteTitle } from './styles';


const Favorites: React.FC<IBookVolumeInfo> = () => {
  const { book } = useFavoriteBook();

  return (
    <>
      <Container>
        <a href="https://southsystem.com.br/" target="_blank" rel="noreferrer">
          <img src={logo} alt="South System" />
        </a>
      </Container>


      <FavoriteTitle>
        <h1>Meus livros favoritos <MdFavorite size={28} color="#AC0808" /></h1>
        <h1><Link to="/">Voltar</Link></h1>
      </FavoriteTitle>

      <ListFavorites>
        {book.map(books => (
          <li key={books.id}>
            <div className="container-card-book">
              <div className="image-card-book">
                <img src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} />
                <span>AUTOR: {books.volumeInfo.authors}</span>
              </div>
            </div>
          </li>
        ))}
      </ListFavorites>
    </>
  )
}

export default Favorites;