/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { TextField, Typography } from '@mui/material';
import AppContext from '../../context/app.context';

import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Table() {
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm();
  const {
    pets, deletePet, setPetId, update,
  } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (info, id) => {
    setPetId(id);
    setOpen(true);
    reset(info);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edite os dados do pet
              </Typography>
              <form className="pet-form" onSubmit={handleSubmit(update)}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <TextField
                      required
                      id="filled-required"
                      label="Required"
                      variant="filled"
                      {...register(
                        'nome',
                        { required: true, pattern: /^[A-Z][a-zA-Z]*$/, minLength: 3 },
                      )}
                      aria-invalid={errors?.nome ? 'true' : 'false'}
                    />

                    <div>
                      {errors?.nome?.type === 'pattern' && <span role="alert">A primeira letra deve ser maiúscula</span>}
                      {errors?.nome?.type === 'required' && <span role="alert">O nome é obrigatório</span>}
                      {errors?.nome?.type === 'minLength' && <span role="alert">O nome deve ter ao menos 3 caracteres</span>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="pet-idade">
                      <legend>Idade:</legend>
                      <input
                        className="form-input"
                        type="number"
                        id="pet-idade"
                        placeholder="Ex.: 2"
                        {...register('idade', { required: true, min: 0 })}
                        aria-invalid={errors?.idade ? 'true' : 'false'}
                      />
                      <div>
                        {errors?.idade?.type === 'required' && <span className="error-message">A idade é obrigatória</span>}
                        {errors?.idade?.type === 'min' && <span className="error-message">A idade mínima é 0</span>}
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="pet-especie">
                      <legend>Espécie: </legend>
                      <select
                        id="pet-especie"
                        {...register('especie', { required: true })}
                      >
                        <option value="cachorro">Cachorro</option>
                        <option value="gato">Gato</option>
                      </select>
                      {errors?.especie?.type === 'required' && <span className="error-message">A espécie é obrigatória</span>}
                    </label>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="pet-tutor">
                      <legend>Id do Tutor: </legend>
                      <input
                        className="form-input"
                        type="number"
                        id="pet-tutor"
                        placeholder="Ex.: 1"
                        {...register('id_tutor', { required: true, min: 1 })}
                        aria-invalid={errors?.id_tutor ? 'true' : 'false'}
                      />
                      <div>
                        {errors?.id_tutor?.type === 'required' && <span className="error-message">O id do tutor é obrigatório</span>}
                        {errors?.id_tutor?.type === 'min' && <span className="error-message">O valor mínimo de id é 1</span>}
                      </div>
                    </label>
                  </div>
                  <div>
                    <Button variant="contained" type="submit">
                      Salvar alterações
                    </Button>
                    <Button variant="contained" type="button" onClick={handleClose}>
                      Fechar
                    </Button>
                  </div>
                </Typography>

              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Especie</th>
              <th>Id do Tutor</th>
              <th>Atualizar Item</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {pets?.map((item, index) => (
              <tr key={item.id}>
                <td
                  data-testid={`customer_checkout__element-order-table-item-number-${index}`}
                >
                  {item.id}
                </td>

                <td data-testid={`customer_checkout__element-order-table-name-${index}`}>
                  {item.nome}
                </td>

                <td
                  data-testid={`customer_checkout__element-order-table-quantity-${index}`}
                >
                  {item.idade}
                </td>
                <td
                  data-testid={`customer_checkout__element-order-table-quantity-${index}`}
                >
                  {item.especie}
                </td>
                <td
                  data-testid={`customer_checkout__element-order-table-quantity-${index}`}
                >
                  {item.id_tutor}
                </td>
                <td
                  data-testid={`customer_checkout__element-order-table-remove-${index}`}
                >
                  <Button onClick={() => handleOpen(item, item.id)}>Atualizar</Button>

                </td>
                <td>
                  <button type="button" onClick={() => deletePet(item.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Table;
