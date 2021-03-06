import React from 'react';
//Componentes
import Loading from '../../components/Loading';
// Hooks
import { useFavoriteBook } from '../../hooks/FavoritesBooks';
// Router-dom
import { Link } from 'react-router-dom';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';
// Icon
import { MdFavorite } from 'react-icons/md';
// imagens
import logo from '../../assets/logo/SouthSystemLogo.jpg';
import noImage from '../../assets/images/sem-foto.jpg';
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
      { !book.length ? (
        <Loading />
      ) : (
          <ListFavorites>
            {book.map(books => (
              <li key={books.id}>
                <div className="container-card-book">
                  <div className="image-card-book">
                    <img src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : noImage} alt={books.volumeInfo.title} />
                    <span>{books.volumeInfo.title}</span>
                  </div>
                </div>
              </li>
            ))}
          </ListFavorites>
        )}
    </>
  )
}

export default Favorites;