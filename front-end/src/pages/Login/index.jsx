/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../routes/utils/auth.routes';

import './style.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https:juniorgouveia.me/" target="_blank">
        Meu Portifólio
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme = createTheme();

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const redirect = () => {
    navigate('/home');
  };

  const toastMessage = (message, type) => {
    toast?.[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
      autoClose: 3000,
      pauseOnHover: false,
      theme: 'colored',
    });
  };

  const onSubmit = async (data) => {
    try {
      const request = await login(data);
      if (request.status === 200) {
        toastMessage(`${request.data.message}`, 'success');
        localStorage.setItem('user', JSON.stringify({
          nome: request.data.nome,
          email: request.data.email,
          categoria: request.data.categoria,
        }));
        setTimeout(() => {
          redirect();
        }, 5000);
      }
    } catch (error) {
      toastMessage('Ops! Algo de errado não está certo!', 'error');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontFamily: 'monospace' }}>
            PetMania - Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <ToastContainer />
            <div className="mb-3">
              <TextField
                required
                margin="normal"
                type="email"
                fullWidth
                label="Email"
                id="email"
                autoFocus
                {...register('email', {
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />
              <div id="emailHelp" className="form-text">Nunca compartilharemos o seu email</div>
              {errors.email && errors.email.message}
            </div>
            <div className="mb-3">
              <TextField
                margin="normal"
                fullWidth
                type="password"
                label="Senha"
                id="senha"
                {...register('senha', { required: true })}
              />

              <div id="passwordHelpBlock" className="form-text" />

              {errors.username && errors.username.message}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar

            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  Cadastrar administrador
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
