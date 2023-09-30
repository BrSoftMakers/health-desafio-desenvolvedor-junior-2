import React, { useEffect, useState } from 'react';
import { Button, Grid, Modal, Select, MenuItem, Dialog, DialogTitle, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import AddSharpIcon from "@mui/icons-material/AddSharp";

import styles from "./Modal.module.css";


const ModalButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOption('');
  };


  const handleConfirm = (values: { option: string }) => {
    setOpen(false);
    setSelectedOption(values.option);
  };


  const fetchProjects = async () => {
    try {
     
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    fetchProjects();
  }, []);

  // const updateProjects = () => {
  //   fetchProjects();
  // };
 

  return (
    <>
      <Button variant="contained" onClick={handleOpen} className={styles.NewRegister}>
        <AddSharpIcon/> Adicionar Professor
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Cadastro de professor</DialogTitle>
        <Grid container justifyContent="center" alignItems="center" sx={{ p: 2}}>
          <Formik initialValues={{ option: '' }} onSubmit={handleConfirm}>
            {({ values }) => (
              <Form>
                <Grid item xs={12} sm={12} sx={{ mb: 4 }}>
                  <Box>
                    <Field></Field>
                  </Box>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Dialog>
    </>
  );
};

export default ModalButton;
