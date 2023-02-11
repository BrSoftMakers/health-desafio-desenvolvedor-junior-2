import { ReactPortal } from '../ReactPortal';
import { Overlay, Container, CloseButton } from './styles';
import { ButtonForm } from '../ButtonForm';
import CloseIcon from '../../assets/images/Close Square Black.svg';

interface ModalDeleteProps {
  visible: boolean;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
  buttonDescription: string;
}

export function ModalDelete({ visible, isLoading, onClose, onConfirm, buttonDescription }: ModalDeleteProps) {

  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container>
          <CloseButton onClick={onClose}>
            <img src={CloseIcon} alt="CloseIcon" />
          </CloseButton>

          <small>Tem certeza que deseja excluir?</small>

          <ButtonForm
            type='button'
            disabled={isLoading}
            isLoading={isLoading}
            onClick={onConfirm}
          >
            {buttonDescription}
          </ButtonForm>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
