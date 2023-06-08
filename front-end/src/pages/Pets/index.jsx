/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Box, Button, InputLabel, Link, MenuItem, TextField, Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dog from '../../assets/doguify.png';
import Header from '../../components/Header';
import Table from '../../components/Table';
import AppContext from '../../context/app.context';
import './style.css';

function Doguify (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'  '}
      <Link color="inherit" href="https://doguify.vercel.app" target="_blank">
        Quer falar com um doguinho?
      </Link>
    </Typography>
  );
}

function Pets () {
  const { registerPetService } = useContext(AppContext);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    registerPetService(data);
  };

  return (
    <>
      <Header />
      <Box
        component="aside"
        sx={{
          width: 300,
          textAlign: 'center',
        }}
        className="pet-form-container"
      >
        <h1>Cadastro de Pet</h1>
        <ToastContainer />
        <div>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className="pet-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <TextField
                error={errors?.nome}
                label="Nome do pet"
                className="form-input"
                id="pet-nome"
                placeholder="Ex.: Kate"
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
              <TextField
                error={errors?.idade}
                className="form-input"
                type="number"
                id="pet-idade"
                label="Idade"
                placeholder="Ex.: 2"
                {...register('idade', { required: true, min: 0 })}
                aria-invalid={errors?.idade ? 'true' : 'false'}
              />
              <div>
                {errors?.idade?.type === 'required' && <span className="error-message">A idade é obrigatória</span>}
                {errors?.idade?.type === 'min' && <span className="error-message">A idade mínima é 0</span>}
              </div>
            </div>
            <div>
              <InputLabel className="form-label" htmlFor="pet-especie">
                <TextField
                  select
                  label="Espécie"
                  defaultValue="cachorro"
                  id="pet-especie"
                  {...register('especie', { required: true })}
                >
                  <MenuItem value="cachorro">Cachorro</MenuItem>
                  <MenuItem value="gato">Gato</MenuItem>
                </TextField>
                {errors?.especie?.type === 'required' && <span className="error-message">A espécie é obrigatória</span>}
              </InputLabel>
            </div>
            <div>
              <TextField
                error={errors?.id_tutor}
                label="Id do Tutor: "
                className="form-input"
                type="number"
                id="pet-tutor"
                placeholder="Ex.: 1"
                {...register('id_tutor', { required: true, min: 1, max: 4 })}
                aria-invalid={errors?.id_tutor ? 'true' : 'false'}
              />
              <div>
                {errors?.id_tutor?.type === 'required' && <span className="error-message">O id do tutor é obrigatório</span>}
                {errors?.id_tutor?.type === 'min' && <span className="error-message">O valor mínimo de id é 1</span>}
                {errors?.id_tutor?.type === 'max' && <span className="error-message">O valor máximo de id é 4</span>}
              </div>
            </div>
            <div>

              <Button
                variant="outlined"
                sx={{
                  marginTop: '1rem',
                }}
                type="submit"
              >
                Cadastrar Pet
              </Button>
            </div>
          </Box>
          <Doguify sx={{ marginTop: '1.5rem' }} />
        </div>
        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
          <img src={dog} style={{ width: '64px', margin: '0 auto' }} alt="" />
        </Box>
      </Box>
      <Table />
    </>
  );
}

export default Pets;
