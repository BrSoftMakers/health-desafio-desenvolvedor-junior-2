import styles from "./PetModal.module.css"; 
import { FaPlus, FaEdit, FaSave, FaBan } from "react-icons/fa";
import { ChangeEvent, useState, useEffect } from "react";
import * as api from "../../api";

type Props = {
    operation: string;
    pressCancelBtn: () => void;
    petIdForEdit?: string;
}

const PetModal = ({operation, pressCancelBtn, petIdForEdit}: Props) => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [tipo, setTipo] = useState('');
    const [raca, setRaca] =  useState('')
    const [dono, setDono] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleNome = (e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value);
    const handleIdade = (e: ChangeEvent<HTMLInputElement>) => setIdade(e.target.value);
    const handleTipo = (e: ChangeEvent<HTMLSelectElement>) => setTipo(e.target.value);
    const handleRaca = (e: ChangeEvent<HTMLInputElement>) => setRaca(e.target.value);
    const handleDono = (e: ChangeEvent<HTMLInputElement>) => setDono(e.target.value);
    const handleTelefone = (e: ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value);

    useEffect(()=> {
        updateInputs();
    }, []);

    const addPetRequest = async () => {
        if(!nome || !idade || !tipo || !raca || !dono || !telefone) {
            alert("Digite todos os campos!");
            return;
        }

        const response = await api.addPet({
            nome,
            idade: Number(idade),
            tipo: Number(tipo),
            raca,
            dono,
            telefone
        });
        window.location.reload();
    }

    const editPetRequest = async () => {
        if(!nome || !idade || !tipo || !raca || !dono || !telefone) {
            alert("Digite todos os campos!");
            return;
        }
        
        if(operation==="edit" && petIdForEdit) {

            const response = await api.editPet(petIdForEdit, {
            nome,
            idade: Number(idade),
            tipo: Number(tipo),
            raca,
            dono,
            telefone
            })

            window.location.reload();
            
        }
    }

    const updateInputs = async () => {
        if(operation==="edit" && petIdForEdit) {
            const response = await api.getPetById(petIdForEdit);
            
            setNome(response.nome);
            setIdade(response.idade);
            setTipo(response.tipo);
            setRaca(response.raca);
            setDono(response.dono);
            setTelefone(response.telefone);
        }
    }

    return (
        <div className={styles.bg}>
            <div className={styles.modalBox}>
                <div className={styles.modalTitle}>
                    {operation === "create" ? <FaPlus /> : <FaEdit  size={'1.2em'} className={styles.editModalIcon}/>}
                    <h2>{operation === "create" ? "Add a pet" : "Edit a pet"}</h2>
                </div>

                <div className={styles.modalBody}>
                    <label htmlFor="">
                        <span>Nome</span>
                        <input
                            type="text"
                            placeholder="Ex: Nick"
                            value={nome}
                            onChange={handleNome}
                            required
                        />   
                    </label>
                    
                    <label htmlFor="">
                        <span>Age</span>
                        <input
                            type="number"
                            placeholder="Ex: 3 years"
                            value={idade}
                            onChange={handleIdade}
                            required
                        />
                    </label>
                    
                    <label htmlFor="">
                        <span>Select pet type</span>
                        <select name="petTypes" id="" required placeholder="Select" value={tipo} onChange={handleTipo}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="0">Dog</option>
                            <option value="1">Cat</option>
                        </select>
                    </label>
                    
                    <label htmlFor="">
                        <span>Breed</span>
                        <input
                            type="text"
                            placeholder="Ex: Pinscher"
                            value={raca}
                            onChange={handleRaca}
                            required
                            />
                    </label>
                    
                    <label htmlFor="">
                        <span>Owner</span>
                        <input
                            type="text"
                            placeholder="Ex: John Avadora"
                            value={dono}
                            onChange={handleDono}
                            required
                            />
                    </label>
                    
                    <label htmlFor="">
                        <span>Owner phone</span>
                        <input
                            type="text"
                            placeholder="Ex: 81 991443234"
                            value={telefone}
                            onChange={handleTelefone}
                            required
                        />
                    </label>
                </div>

                <hr />

                <div className={styles.modalButtons}>
                    <div
                        className={styles.submitButton}
                        onClick={operation==="create" ? addPetRequest : editPetRequest}
                    >
                        <div>{operation==="create" ? "Add pet" : "Submit changes"}</div>
                        {operation==="create" ? <FaPlus /> : <FaSave/>}
                    </div>
                    <div className={styles.cancelButton} onClick={pressCancelBtn}>
                        <div>Cancel</div>
                        <FaBan />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetModal;