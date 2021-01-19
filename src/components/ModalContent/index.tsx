import React from 'react';
import styled from 'styled-components';
import { useBookModal } from '../../context/BookContext';

import { Content } from './styles';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  width: 800px;
  height: 800px;
  color: #000;
  
  button {
    position: absolute;
    right: 670px;
    top: 680px;
  }
`;

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

type Props = {
  setModalOpen: any;
  books?: IBookVolumeInfo;
};

const ModalContent: React.FC<Props> = ({ setModalOpen, books }) => {
  const { book } = useBookModal()

  console.log(book);

  return (
    <div className='nes-container is-dark with-title is-centered'>
      <Wrapper>
        <Content>
          <div className="content-img">
            <img src={book?.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>

          <div className="content-general">
            <h2>Titulo: {book?.volumeInfo.title}</h2>
            <span>Autor: {book?.volumeInfo.authors}</span>
          </div>
        </Content>
        <button
          type='button'
          className='nes-btn is-success'
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