import React, { useState } from 'react';
import EditPetModal from '../EditPetModal/EditPetModal';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Visibility, Edit, Delete, MoreVert } from '@mui/icons-material';

const TabelaPetsRow = ({ id, nome, idade, especie, raca, dono, contato, onRemove, onEdit, onView }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleView = () => {
    onView();
    handleCloseMenu();
  };

  const handleOpenModal = () => {
    setIsEditModalOpen(true);
    handleCloseMenu();
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEdit = (newData) => {
    onEdit(newData);
    handleCloseModal();
  };

  const handleDelete = () => {
    onRemove(id);
    handleCloseMenu();
  };

  return (
    <React.Fragment>
      <tr key={id}>
        <td>{nome}</td>
        <td>{idade}</td>
        <td>{especie}</td>
        <td>{raca}</td>
        <td>{dono}</td>
        <td>{contato}</td>
        <td>
          <IconButton onClick={handleOpenMenu}>
            <MoreVert />
          </IconButton>

          <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleView}>
              <Visibility fontSize="small" />
              Visualizar
            </MenuItem>
            <MenuItem onClick={handleOpenModal}>
              <Edit fontSize="small" />
              Editar
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <Delete fontSize="small" />
              Excluir
            </MenuItem>
          </Menu>
        </td>
      </tr>

      {isEditModalOpen && (
        <EditPetModal
          key={`modal-${id}`}
          nome={nome}
          idade={idade}
          especie={especie}
          raca={raca}
          dono={dono}
          contato={contato}
          onEdit={handleEdit}
          onClose={handleCloseModal}
        />
      )}
    </React.Fragment>
  );
};

export default TabelaPetsRow;
