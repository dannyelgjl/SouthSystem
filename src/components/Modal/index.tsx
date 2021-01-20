import React, { useState } from 'react';
// Icons
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// Interfaces
import { IBookVolumeInfo } from '../../interfaces/interface';
// Estilos
import { Content, Container, ButtonModal } from './styles';


type Props = {
  book: IBookVolumeInfo;
};

const ModalJv: React.FC<Props> = ({ book }) => {
  const [openModal, setOpenModal] = useState(false);

  return !openModal ? (
    <button type="button" onClick={() => setOpenModal(true)}>
      <div>
        <BiCommentDetail size={16} color="#FFF" />
      </div>
      <span>Detalhes</span>
    </button>
  ) : (
      <Container>
        <Content>
          <div className="content-img">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>

          <div className="content-general">
            <h2>{book?.volumeInfo.title}</h2>
            <span>Autor: {book?.volumeInfo.authors}</span>
            <span>Editora: {book?.volumeInfo.publisher}</span>
            <span>Páginas: {book?.volumeInfo.pageCount}</span>
            <span>Linguagem: {book?.volumeInfo.language}</span>
            <h3>Descrição: {book?.volumeInfo.description}</h3>
          </div>
          <ButtonModal
            type='button'
            className='close-button'
            onClick={() => setOpenModal(false)}
          >
            <AiOutlineCloseCircle size={32} color="#fe6e00" />
          </ButtonModal>
        </Content>
      </Container>
    )
    ;
}

export default ModalJv;