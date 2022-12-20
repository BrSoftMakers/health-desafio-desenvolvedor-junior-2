import './styles.css';
import Close from '../../assets/img/close.png';
import { useState } from 'react';
import { toast } from 'react-toastify'
import api from '../../services/api';
import { getItem } from '../../utils/storage';


function EditModalPet({ closeEditModal, pets }) {
    const [form, setForm] = useState({

        nome: pets.nome,
        idade: pets.idade,
        tipo: pets.tipo,
        raca: pets.raca,
        cliente_id: pets.cliente_id
    })

    const token = getItem('token');

    async function handleSubmit(event, id) {
        event.preventDefault();

        try {
            const response = await api.put(`/pets/${pets.id}`, {
                nome: form.nome,
                idade: form.idade,
                tipo: form.tipo,
                raca: form.raca,
                cliente_id: form.cliente_id

            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            closeEditModal();

            return toast.success('Atualizado com Sucesso!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });


        } catch (error) {

        }

    }

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }


    return (
        <div className='container-modal'>
            <div className='content-form-edit'>

                <img
                    src={Close} alt='fechar modal'
                    onClick={() => closeEditModal(false)}
                    className='icon-close-edit '
                />

                <form onSubmit={handleSubmit}>

                    <div className='are-inputs'>
                        <label>Nome:</label>
                        <input
                            type='text'
                            name='nome'
                            placeholder='nome do pet'
                            value={form.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Idade:</label>
                        <input
                            type='number'
                            name='idade'
                            placeholder='idade do pet'
                            value={form.idade}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Tipo:</label>
                        <select
                            name='tipo'
                            value={form.tipo}
                            onChange={handleChange}
                        >
                            <option>Selecione</option>
                            <option>Gato</option>
                            <option >Cachorro</option>
                        </select>
                    </div>

                    <div className='are-inputs'>
                        <label>Raça:</label>
                        <input
                            type='text'
                            name='raca'
                            placeholder='raça do pet'
                            value={form.raca}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='content-btn-modal'>
                        <button type='submit' className='btn-create-update'>Atualizar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default EditModalPet;
