import React from 'react';
// Context
import { useBookModal } from '../../context/BookContext';
// Estilos
import { Content, Wrapper } from './styles';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';


type Props = {
  setModalOpen: any;
  books?: IBookVolumeInfo;
};

const ModalContent: React.FC<Props> = ({ setModalOpen, books }) => {
  const { book } = useBookModal()

  return (
    <div className='nes-container is-dark with-title is-centered'>
      <Wrapper>
        <Content>
          <div className="content-img">
            <img src={book?.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>

          <div className="content-general">
            <h2>{book?.volumeInfo.title}</h2>
            <span>Autor: {book?.volumeInfo.authors}</span>
            <span>Editora: {book?.volumeInfo.publisher}</span>
            <span>Páginas: {book?.volumeInfo.pageCount}</span>
            <span>Linguagem: {book?.volumeInfo.language}</span>
            <h3>Descrição: {book?.volumeInfo.description}</h3>
          </div>
        </Content>
        <button
          type='button'
          className='close-button'
          onClick={() => setModalOpen(false)}
        >
          <span>X</span>
        </button>
      </Wrapper>
    </div>
  )
}

  ;

export default ModalContent;