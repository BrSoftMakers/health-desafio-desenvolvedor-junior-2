import React, { ButtonHTMLAttributes, useState } from "react";

import styles from "./NewPet.module.css";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Pets, createPet } from "../../../services/petService";
import { useLocation, useNavigate } from "react-router-dom";

const initialValues: Pets = {
    photoLink: '',
    petName: '',
    petAge: 0,
    petType: '',
    petRace: '',
    petOwner: '',
    phoneOwner: '',
  }

  const validationSchema = Yup.object().shape({

    petName: Yup.string().required('Esse campo é obrigatório!'),
    petAge: Yup.number().required('Esse campo é obrigatório!'),
    petType: Yup.string().required('Esse campo é obrigatório!'),
    petRace: Yup.string().required('Esse campo é obrigatório!'),
    petOwner: Yup.string().required('Esse campo é obrigatório!'),
    phoneOwner: Yup.number().required('Esse campo é obrigatório!'),

});

interface ButtonRegister extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
  }
  
  const NewPet = ({ title, ...rest }: ButtonRegister) => {

    const navigate = useNavigate();
    const location = useLocation();
    const pets = location.state as Pets;

    const onSubmit = async (values: Pets) => {
        try {
          
          await createPet(values);
          alert('Pet registrado com sucesso!!')
          handleCloseModal();
          navigate('/pets')
    
        } catch (error) {
          alert('Erro ao enviar informações:');
        }

        window.location.reload()
      };

    const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

    return (
      <>
        <button
          {...rest}
          type="button"
          onClick={handleOpenModal}
          className={styles.buttonNewRegister}
        >
          <AddSharpIcon style={{ fontSize: 24, marginRight: 8 }} />
          {title}
        </button>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Adicionar um Novo Pet</DialogTitle>
          <DialogContent>

            <div className={styles.contentPage}>

          <div className={styles.forms}>
            <Formik
              validationSchema={validationSchema}
              initialValues={pets || initialValues}
              onSubmit={onSubmit}
              >
              <Form>
              <Grid container spacing={2} sx={{p: 4}}>
              <Grid item xs={6} sm={12} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="photoLink" 
                    label="Link da imagem"
                    />
                    <ErrorMessage
                      name="photoLink"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={12} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="petName" 
                    label="Nome do Animal"
                    />
                    <ErrorMessage
                      name="petName"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="petType" 
                    label="Tipo do Animal"
                    />
                    <ErrorMessage
                      name="petType"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="number" 
                    name="petAge" 
                    label="Idade do Animal"
                    />
                    <ErrorMessage
                      name="petAge"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={12} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="petRace" 
                    label="Raça do Animal"
                    />
                    <ErrorMessage
                      name="petRace"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="petOwner" 
                    label="Tutor(a) do Animal"
                    />
                    <ErrorMessage
                      name="petOwner"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="number" 
                    name="phoneOwner" 
                    label="Telefone do Tutor(a)"
                    />
                    <ErrorMessage
                      name="phoneOwner"
                      component="div"
                      className={styles.error}
                    />
                  </Box>
                </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" alignItems="center"  >
            <Grid item xs={6} >
            </Grid>
            </Box>
            <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleCloseModal}>Fechar</Button>
            <Button variant="contained" color="primary" type="submit">Salvar</Button>
          </DialogActions>
              </Form>
              
            </Formik>
          </div>

        </div>

          </DialogContent>
          
        </Dialog>
      </>
    );
  };
  
  export default NewPet;