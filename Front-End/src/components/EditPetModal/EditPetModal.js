import React, { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Edit, Close } from '@mui/icons-material';

const EditPetModal = ({ nome, idade, especie, raca, dono, contato, onEdit, onClose }) => {

  const [editedPet, setEditedPet] = useState({
    nome,
    idade,
    especie,
    raca,
    dono,
    contato,
  });
  const handleChange = (e) => {
    setEditedPet({ ...editedPet, [e.target.name]: e.target.value });
  };

  const handleUpdatePet = () => {
    onEdit(editedPet);
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 15px 28px rgba(0, 0, 0, 0.35)' }}>
      <div className="modal-container" style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <Typography variant="h6" style={{ textAlign: 'center' }}>Editar Pet</Typography>
        <form style={{ display: 'flex', flexDirection: 'column', width: '175px' }}>
          <label>
            Nome:
            <input type="text" name="nome" value={editedPet.nome} onChange={handleChange} className="input-field" style={{ margin: '10px auto' }} />
          </label>
          <label>
            Idade:
            <input type="date" name="idade" value={editedPet.idade} onChange={handleChange} className="input-field" style={{ margin: '10px auto' }} />
          </label>
          <FormControl>
            <InputLabel style={{marginTop: '8px'}}>Espécie</InputLabel>
            <Select
            style={{marginTop: '15px'}}
              name="especie"
              value={editedPet.especie}
              onChange={handleChange}
              className="input-field"
            >
              <MenuItem value="Cachorro">Cachorro</MenuItem>
              <MenuItem value="Gato">Gato</MenuItem>
            </Select>
          </FormControl>

          <label>
            Raça:
            <input type="text" name="raca" value={editedPet.raca} onChange={handleChange} className="input-field" style={{ margin: '10px auto' }} />
          </label>
          <label>
            Dono:
            <input type="text" name="dono" value={editedPet.dono} onChange={handleChange} className="input-field" style={{ margin: '10px auto' }} />
          </label>
          <label>
            Contato:
            <input type="text" name="contato" value={editedPet.contato} onChange={handleChange} className="input-field" style={{ margin: '10px auto' }} />
          </label>
          <Button variant="contained" onClick={handleUpdatePet} startIcon={<Edit />}>
            Atualizar Pet
          </Button>
          <Button variant="outlined" onClick={onClose} startIcon={<Close />}>
            Cancelar
          </Button>
        </form>
      </div>
    </Modal >
  );
};

export default EditPetModal;
