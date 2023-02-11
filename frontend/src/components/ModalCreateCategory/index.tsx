import { ReactPortal } from '../ReactPortal';
import { Overlay, Form, ContainerButton, CloseButton } from './styles';
import { Input } from '../Input';
import { ButtonForm } from '../ButtonForm';
import CloseIcon from '../../assets/images/Close Square Black.svg';
import { useState } from 'react';
import { api } from '../../utils/api';

interface ModalCreateCategoryProps {
  visible: boolean;
  onClose: () => void;
}

export function ModalCreateCategory({ visible, onClose }: ModalCreateCategoryProps) {
  const [newCategory, setNewCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!visible) {
    return null;
  }

  async function handleConfirm() {
    setIsLoading(true);
    const payload = {
      name: newCategory
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.post('/category', payload);

    setIsLoading(false);
    setNewCategory('');
    onClose();
  }

  const isInputOk = newCategory.length > 0;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Form>
          <CloseButton onClick={onClose}>
            <img src={CloseIcon} alt="CloseIcon" />
          </CloseButton>

          <small>Insina o nome da nova categoria:</small>
          <Input
            value={newCategory}
            placeholder='Nome'
            onChange={(event) => setNewCategory(event.target.value)}
          />

          <ContainerButton>
            <ButtonForm
              type='submit'
              disabled={!isInputOk}
              isLoading={isLoading}
              onClick={handleConfirm}
            >
            Criar categoria
            </ButtonForm>
          </ContainerButton>
        </Form>
      </Overlay>
    </ReactPortal>
  );
}
