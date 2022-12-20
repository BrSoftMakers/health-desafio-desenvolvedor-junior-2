import './styles.css';
import Close from '../../assets/img/close.png';
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify'
import { useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';



function EditModalClient({ closeEditModal, client }) {

    const [form, setForm] = useState({
        nome: client.nome,
        cpf: client.cpf,
        telefone: client.telefone,
        cep: client.cep,
        bairro: client.bairro,
        logradouro: client.logradouro,
        complemento: client.complemento,
        cidade: client.cidade,
        estado: client.estado
    });


    function searchCep(event) {

        const cep = event.target.value.replace(/[\D]/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)

            .then(response => response.json())

            .then(data => {
                setForm(client)

                setForm({
                    ...form({
                        cep: data.cep,
                        bairro: data.bairro,
                        rua: data.logradouro,
                        complemento: data.complemento,
                        cidade: data.cidade,
                        uf: data.uf
                    })
                })

            });
    }

    const token = getItem('token');

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await api.put(`/clientes/${client.id}`, {
                nome: form.nome,
                cpf: form.cpf,
                telefone: form.telefone,
                cep: form.cep,
                bairro: form.bairro,
                rua: form.rua,
                complemento: form.complemento,
                cidade: form.cidade,
                uf: form.uf

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
            return error.message;
        }

    }


    return (
        <div className='container-modal'>
            <div className='content-form-create'>

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
                            placeholder='Nome cliente'
                            name='nome'
                            value={form.nome}
                            onChange={handleChange}
                        />

                    </div>

                    <div className='are-inputs'>
                        <label>CPF:</label>
                        <IMaskInput
                            mask="000.000.000-00"
                            placeholder='cpf cliente'
                            name='cpf'
                            value={form.cpf}
                            onChange={handleChange}
                        />

                    </div>

                    <div className='are-inputs'>
                        <label>Telefone:</label>
                        <IMaskInput
                            mask="(00)0 0000-0000"
                            placeholder='Telefone  cliente'
                            name='telefone'
                            value={form.telefone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>CEP:</label>
                        <IMaskInput
                            mask="00000-000"
                            placeholder='Cep Cliente'
                            name='cep'
                            onBlur={searchCep}
                            value={form.cep}
                            onChange={handleChange}
                        />

                    </div>

                    <div className='are-inputs'>
                        <label>Complemento:</label>
                        <input
                            type='text'
                            placeholder='complemento Cliente'
                            name='complemento'
                            value={form.complemento}
                            onChange={handleChange}

                        />
                    </div>
                    <div className='are-inputs'>
                        <label>Rua:</label>
                        <input
                            type='text'
                            name='rua'
                            placeholder='logradouro Cliente'
                            value={form.logradouro}
                            onChange={handleChange}

                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Bairro:</label>
                        <input
                            type='text'
                            placeholder='Bairro Cliente'
                            name='bairro'
                            value={form.bairro}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Cidade:</label>
                        <input
                            type='text'
                            placeholder='cidade Cliente'
                            name='cidade'
                            value={form.cidade}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Estado:</label>
                        <input
                            type='text'
                            placeholder='estado Cliente'
                            name='estado'
                            maxLength='2'
                            value={form.estado}
                            onChange={handleChange}

                        />
                    </div>

                    <div className='content-btn-modal'>
                        <button
                            type='submit'
                            className='btn-create-update'

                        > Atualizar</button>
                    </div>


                </form>
            </div>
        </div>
    );
}


export default EditModalClient;
