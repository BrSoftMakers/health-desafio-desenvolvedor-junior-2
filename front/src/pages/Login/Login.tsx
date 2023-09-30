import React from "react";
import styles from "./Login.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { User, signin } from "../../services/authService";

const initialValues: User = {
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({

    email: Yup.string().email('Esse Email não é válido!').required('O Email é obrigatório!'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres!').required('A senha é obrigatória!')

});

const Login: React.FC = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (values: User) => {
        try {
            const user = await signin(values);
            login(user);
            alert('Login efetuado com sucesso!')
            navigate('/')
        } catch (error) {
            console.log(error)
            alert('Email ou Senha invalida!')
        }

    };
    return (
        <div className={styles.loginBackground}>
          <Box className={styles.boxcentralized}>
            <div className={styles.container}>
              <div className={styles.contentPage}>
                <div className={styles.centerLogin}>               
                  <h1>Pet<div className={styles.titleLogin}>Mania</div></h1>
                </div>
                <div className={styles.LogoLogin}>
                  Acesse a sua conta
                </div>
                <div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    <Form className={styles.forms}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="email"
                            label="Email*"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={styles.error}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            type="password"
                            name="password"
                            label="Senha*"
                            sx={{ marginTop: '10px'}}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className={styles.error}
                          />
                        </Grid>
                      </Grid>
                      <NavLink to="/signup" className={styles.active}>
                        Não possui uma conta? cadastre-se
                      </NavLink>
                      <Box mt={2} display="flex" justifyContent="center" alignItems="center">
                        <Button className={styles.buttonLogin}
                          variant="contained"
                          color="primary"
                          type="submit"
                          sx={{ width: '100%', backgroundColor: '#8bc4db', marginTop: '30px' }}
                        >
                          Entrar
                        </Button>
                      </Box>
                    </Form>
                    
                  </Formik>
                </div>
              </div>
            </div>
          </Box>
          
        </div>
      );
    };
    
    export default Login;