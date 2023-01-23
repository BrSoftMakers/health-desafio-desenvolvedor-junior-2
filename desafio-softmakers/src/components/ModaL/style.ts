import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 1px;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  .modal-box {
    width: 95vw;
    max-width: 30rem;
    height: 70%;
    max-height: 25rem;

    display: block;
    background: white;
    padding: 1rem;
    border-radius: 1rem;
    margin: 50px auto;
  }
`;
