import React, { ButtonHTMLAttributes, useState } from "react";

import styles from "./Buttun.module.css"

import AddSharpIcon from "@mui/icons-material/AddSharp";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";


interface ButtonRegister extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
  }
  
  const NewRegister = ({ title, ...rest }: ButtonRegister) => {
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
          <DialogTitle>Novo Laborátorio</DialogTitle>
          <DialogContent>
            {/* Conteúdo do modal */}
            <p>Modal</p>
          </DialogContent>
          <DialogActions>
            <button onClick={handleCloseModal}>Fechar</button>
            {/* Outras ações do modal */}
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default NewRegister;