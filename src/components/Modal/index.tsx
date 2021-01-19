import React from 'react';
// react-dom
import { createPortal } from 'react-dom';
// estilos
import { Wrapper } from './styles';

type Props = {
  modalOpen: boolean;
};

const Modal: React.FC<Props> = ({ modalOpen, children }) => {
  if (!modalOpen) return null;

  return createPortal(
    <Wrapper>
      <div>{children}</div>
    </Wrapper>,
    document.body
  );
};

export default Modal;