import React, { useState } from 'react';
import EditPetModal from '../EditPetModal/EditPetModal';
import PetForm from '../PetForm/PetForm';

function ModalContainer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <EditPetModal isOpen={isModalOpen} onClose={closeModal} />
      <PetForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default ModalContainer