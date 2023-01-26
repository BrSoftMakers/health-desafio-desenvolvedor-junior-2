/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import toastMessage from '../helpers/toastMessage';
import { register as registerUser } from '../routes/utils/auth.routes';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https:juniorgouveia.me/">
        Meu Portifólio
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/login');
  };
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const request = await registerUser(data);
      if (request.status === 201) {
        toastMessage('Usuário criado com sucesso', 'success');
        localStorage.setItem('user', JSON.stringify({
          nome: request.data.nome,
          email: request.data.email,
          senha: request.data.senha,
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.nome}
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Digite o seu nome"
                  autoFocus
                  {...register('nome', {
                    required: 'O nome é obrigatório',
                    pattern: {
                      value: /^[A-Z][a-zA-Z]*$/i,
                      message: 'O nome é inválido',
                    },
                  })}

                />
                {errors.nome && errors.nome.message}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={errors.email}
                  fullWidth
                  id="email"
                  label="Digite um email"
                  name="email"
                  helperText="Nunca compartilharemos seu email com alguém"
                  autoComplete="email"
                  {...register('email', {
                    required: 'O email é obrigatório.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Endereço de email inválido',
                    },
                  })}
                />
                {errors.email && errors.email.message}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.senha}
                  required
                  fullWidth
                  name="password"
                  label="Digite uma senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('senha', {
                    required: 'A senha é obrigatória',
                    minLength: {
                      value: 8,
                      message: 'Deve conter, no mínimo, 8 caracteres',
                    },
                  })}
                />
                {errors.senha && errors.senha.message}
              </Grid>
              <Grid item xs={12}>
                <span>Ao se cadastrar você concorda com os nossos termos.</span>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já tem uma conta? Faça login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
