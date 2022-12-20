import './styles.css';
import Close from '../../assets/img/close.png';
import { getItem } from '../../utils/storage';
import { toast } from 'react-toastify'
import api from '../../services/api';
import { useState } from 'react';


const dadosPet = {
    nome: '',
    idade: '',
    tipo: '',
    raca: '',
    cliente_id: ''
}

function ModalAddPet({ closeModalAdd }) {
    const [form, setForm] = useState({ ...dadosPet });

    const token = getItem('token');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!form.nome || !form.idade || !form.raca || !form.tipo) {
                return toast.warn('Preencha todos campos obrigatórios!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }
            if (form.idade > 18) {
                return toast.error('A idade não corresponde a idade da espécie!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            const response = await api.post('/pets', {
                nome: form.nome,
                idade: form.idade,
                tipo: form.tipo,
                raca: form.raca,
                cliente_id: form.id_cliente
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            closeModalAdd();

            return toast.success('Cadastrado com Sucesso!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });


        } catch (error) {
            if (error.message) {
                return toast.error('Cliente não encontrado!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }
        }


    }

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }


    return (
        <div className='container-modal'>
            <div className='content-form-add-pet'>

                <img
                    src={Close} alt='fechar modal'
                    className='icon-close-edit '
                    onClick={() => closeModalAdd(false)}
                />

                <form onSubmit={handleSubmit}>

                    <div className='are-inputs'>
                        <label>Nome:</label>
                        <input
                            type='text'
                            name='nome'
                            placeholder='nome pet'
                            value={form.nome}
                            onChange={handleChange}

                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Idade:</label>
                        <input
                            type='number'
                            name='idade'
                            placeholder='idade pet'
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
                            <option>Cachorro</option>
                        </select>
                    </div>

                    <div className='are-inputs'>
                        <label>Raça:</label>
                        <input
                            type='text'
                            name='raca'
                            placeholder='raça pet'
                            value={form.raca}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>ID CLIENTE:</label>
                        <input
                            type='number'
                            name='id_cliente'
                            placeholder='Id cliente'
                            value={form.id_cliente}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='content-btn-modal'>
                        <button type='submit' className='btn-create-update'>Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default ModalAddPet;
