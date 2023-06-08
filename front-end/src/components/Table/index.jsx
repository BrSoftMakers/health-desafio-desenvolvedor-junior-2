/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow,
  TextField, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../../context/app.context';

import './styles.css';

const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  heigth: '600px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  paddingBottom: '2px',
  p: 4,
};

function Tabela () {
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm();
  const {
    pets, deletePet, setPetId, update, getPets,
  } = useContext(AppContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (info, id) => {
    setPetId(id);
    setOpen(true);
    reset(info);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getPets();
  }, []);

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
              <Box
                component="form"
                onSubmit={handleSubmit(update)}
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
              >
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <TextField
                      error={errors?.nome}
                      id="filled-required"
                      label="Novo nome"
                      {...register(
                        'nome',
                        { pattern: /^[A-Z][a-zA-Z]*$/, minLength: 3 },
                      )}
                      aria-invalid={errors?.nome ? 'true' : 'false'}
                    />

                    <div>
                      {errors?.nome?.type === 'pattern' && <span role="alert">A primeira letra deve ser maiúscula</span>}
                      {errors?.nome?.type === 'minLength' && <span role="alert">O nome deve ter ao menos 3 caracteres</span>}
                    </div>
                  </div>
                  <div>
                    <TextField
                      className="form-input"
                      type="number"
                      id="pet-idade"
                      placeholder="Ex.: 2"
                      label="Nova idade"
                      {...register('idade', { min: 0 })}
                      aria-invalid={errors?.idade ? 'true' : 'false'}
                    />
                    <div>
                      {errors?.idade?.type === 'min' && <span className="error-message">A idade mínima é 0</span>}
                    </div>
                  </div>
                  <div>
                    <TextField
                      id="pet-especie"
                      label="Espécie"
                      {...register('especie')}
                    >
                      <option value="cachorro">Cachorro</option>
                      <option value="gato">Gato</option>
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      className="form-input"
                      type="number"
                      id="pet-tutor"
                      label="Id do tutor"
                      placeholder="Ex.: 1"
                      {...register('id_tutor', { min: 1 })}
                      aria-invalid={errors?.id_tutor ? 'true' : 'false'}
                    />
                    <div>
                      {errors?.id_tutor?.type === 'min' && <span className="error-message">O valor mínimo de id é 1</span>}
                    </div>

                  </div>
                  <div>
                    <Grid container justifyContent="space-around">
                      <Grid item>
                        <Button variant="contained" type="submit">
                          Salvar alterações
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" type="button" onClick={handleClose}>
                          Fechar
                        </Button>
                      </Grid>
                    </Grid>

                  </div>
                </Typography>

              </Box>
            </div>
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper} className="table-container">
        {pets.length ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Idade</TableCell>
                <TableCell align="center">Especie</TableCell>
                <TableCell align="center">Id do Tutor</TableCell>
                <TableCell align="center">Tutor</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contato</TableCell>
                <TableCell align="center" />
                <TableCell align="center" />
              </TableRow>
            </TableHead>
            <TableBody>
              {pets?.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component="td"
                    scope="row"
                  >
                    {item.id}
                  </TableCell>

                  <TableCell
                    align="center"
                  >
                    {item.nome}
                  </TableCell>

                  <TableCell
                    align="center"
                  >
                    {item.idade}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {item.especie}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {item.id_tutor}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {item.tutor?.nome || 'Atualize a págína para exibir'}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {item.tutor?.email || 'Atualize a págína para exibir'}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {item.tutor?.contato || 'Atualize a págína para exibir'}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    <Button variant="outlined" startIcon={<ModeEdit />} onClick={() => handleOpen(item, item.id)}>Atualizar</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletePet(item.id)}>Remover</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : <Typography sx={{ textAlign: 'center', marginTop: '20%' }} variant="h6" component="h2"> Ainda não há pets cadastrados 🐶. Que tal atualizar a página? </Typography>}
      </TableContainer>

    </>
  );
}

export default Tabela;
