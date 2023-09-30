import React, { ButtonHTMLAttributes, useState } from "react";

import styles from "./PetEdit.module.css";

import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import { Pets, updatePet } from "../../../services/petService";
import { useLocation, useNavigate } from "react-router-dom";


interface ButtonRegister extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
  
  const PetEdit = ({ title, ...rest }: ButtonRegister) => {

    const navigate = useNavigate();
    const location = useLocation();
    const pets = location.state as Pets;

    const onSubmit = async (values: Pets) => {
        try {
          
          await updatePet(values);
          alert('Pet Atualizado com sucesso!!')
          handleCloseModal();
          navigate('/')
    
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
          <EditIcon style={{ fontSize: 24, marginRight: 8 }} />
          {title}
        </button>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Editar Registro</DialogTitle>
          <DialogContent>

            <div className={styles.contentPage}>

          <div className={styles.forms}>
            <Formik
              initialValues={pets}
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
                  </Box>
                </Grid>
                
                <Grid item xs={6} sm={6} >
                  <Box>
                    <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    type="text" 
                    name="phoneOwner" 
                    label="Telefone do Tutor(a)"
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
  
  export default PetEdit;