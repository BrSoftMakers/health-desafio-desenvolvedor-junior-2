import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import api from "../utils/api";
import "./AnimalDelete.css";

const AnimalDelete = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [showModal, setShowModal] = useState(true);

    const handleDelete = async () => {
        try {
            setShowModal(false);
            history("/animals");
            const response = await api.deleteAnimal(id);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = () => {
        setShowModal(false);
        history("/animals");
    }

    return (
        <Modal
        isOpen={showModal}
        onRequestClose={handleCancel}
        className="modal"
        overlayClassName="modal-overlay"
        >
            <h1>Tem certeza que deseja excluir o animal?</h1>
            <div className="modalFooter">
                <button onClick={handleDelete}>Confirmar</button>
                <button style={{backgroundColor: "#f44336"}} onClick={handleCancel}>Cancelar</button>
            </div>
        </Modal>
    )

}

export default AnimalDelete;