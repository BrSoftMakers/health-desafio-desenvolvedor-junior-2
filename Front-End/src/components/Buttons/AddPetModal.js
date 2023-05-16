import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Add} from '@mui/icons-material';


const AddPetModal = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenModal} startIcon={<Add />}>
        Adicionar Pet
      </Button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="add-pet-modal">
            <Typography variant="h6">Adicionar Pet</Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPetModal;
