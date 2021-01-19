import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 1920px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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