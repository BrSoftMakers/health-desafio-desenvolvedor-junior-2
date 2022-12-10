import styles from "./PetList.module.css";
import { FaEdit, FaTimes } from "react-icons/fa";
import * as api from "../../api";
import { useState, useEffect } from "react";
import { Pet } from "../../types/Pet";
import PetModal from "../PetModal/PetModal";

const PetList = () => {
    const [pets, setPets] = useState<Pet[]>([])
    const [loading, setLoading] = useState(false);
    const [editingPet, setEditingPet] = useState(false);
    const [idForEdit, setIdForEdit] = useState('');

    useEffect(()=> {
        loadPets();
    }, []);

    const loadPets = async () => {
        setLoading(true);
        const json = await api.getAllPets();
        setLoading(false);
        setPets(json);
    }

    const deletePet = async (id: string) => {
        await api.deletePet(id);
        loadPets();
    }

    const handleEditModal = (id: string) => {
        setIdForEdit(id)
        setEditingPet(true);
    }

    const clickForCancel = () => {
        setEditingPet(false);
    }

    return (
        <>
        {loading &&
            <div>Carregando...</div>
        }

        {!loading &&
        <>
        {pets.map((pet, index) => (
            <div className={styles.petItem}>
                <div className={styles.petInfo}>
                    <strong>Name:</strong> {pet.nome} | <strong>Age:</strong> {pet.idade} | <strong>Breed:</strong> {pet.raca} | <strong>Owner: </strong> {pet.dono} | <strong>Phone: </strong> {pet.telefone} | <strong>Type: </strong> {pet.tipo===0 ? "Dog" : "Cat"}
                </div>
                <div className={styles.petItemButtons}>
                    <FaEdit className={styles.FaEdit} onClick={() => handleEditModal(pet.id)}/>
                    <FaTimes className={styles.FaTimes} onClick={() => deletePet(pet.id)} />
                </div>
            </div>
        ))}</>
        }

        {editingPet &&

            <PetModal operation="edit" pressCancelBtn={clickForCancel} petIdForEdit={idForEdit}/>
        }
        </>


    );
}

export default PetList;