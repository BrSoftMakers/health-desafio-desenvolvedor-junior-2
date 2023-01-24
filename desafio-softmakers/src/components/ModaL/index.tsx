import { ReactNode } from 'react';
import { ModalOverlay } from './style';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <ModalOverlay onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className='modal-box'>
            {props.children}
          </div>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
