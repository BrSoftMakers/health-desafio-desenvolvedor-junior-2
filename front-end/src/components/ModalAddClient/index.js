import './styles.css';
import Close from '../../assets/img/close.png';
import { IMaskInput } from "react-imask";
import { toast } from 'react-toastify'
import { useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';


const dataFormClient = {
    nome: '',
    cpf: '',
    telefone: '',

}

function ModalAddClient({ closeModalAdd }) {
    const [form, setForm] = useState({ ...dataFormClient });

    const [valueCep, setvalueCep] = useState('');
    const [valueBairro, setvalueBairro] = useState('');
    const [valueRua, setvalueRua] = useState('');
    const [valueCidade, setvalueCidade] = useState('');
    const [valueUf, setvalueUf] = useState('');
    const [valueComp, setvalueComp] = useState('');



    function searchCep(event) {

        const cep = event.target.value.replace(/[\D]/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)

            .then(response => response.json())

            .then(data => {
                console.log(data);
                setvalueCep(data.cep);
                setvalueBairro(data.bairro);
                setvalueRua(data.logradouro);
                setvalueCidade(data.localidade);
                setvalueUf(data.uf);
                setvalueComp(data.complemento)

            });
    }

    const token = getItem('token');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!form.nome || !form.cpf || !form.telefone || !valueCep) {
                return toast.warn('Preencha os campos obrigatórios: NOME, CPF, TELEFONE, CEP!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            const response = await api.post('/clientes', {
                nome: form.nome,
                cpf: form.cpf,
                telefone: form.telefone,
                cep: valueCep,
                logradouro: valueBairro,
                complemento: valueComp,
                bairro: valueBairro,
                cidade: valueCidade,
                estado: valueUf,
            },
                {
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
            if (form.cpf === form.cpf) {
                return toast.error('CPF já existe na base de dados', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            return error.message;
        }

    }

    function handleChange({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }


    return (
        <div className='container-modal'>
            <div className='content-form-create'>

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
                            placeholder='nome cliente'
                            name='nome'
                            value={form.nome}
                            onChange={handleChange}
                        />

                    </div>

                    <div className='are-inputs'>
                        <label>CPF:</label>
                        <IMaskInput
                            mask="000.000.000-00"
                            placeholder='CPF  cliente'
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
                            value={valueCep}
                            onChange={(event) => setvalueCep(event.target.value)}
                        />

                    </div>

                    <div className='are-inputs'>
                        <label>Complemento:</label>
                        <input
                            type='text'
                            placeholder='complemento Cliente'
                            name='complemento'
                            value={valueComp}
                            onChange={(event) => setvalueComp(event.target.value)}

                        />
                    </div>
                    <div className='are-inputs'>
                        <label>Rua:</label>
                        <input
                            type='text'
                            name='rua'
                            placeholder='logradouro Cliente'
                            value={valueRua}
                            onChange={(event) => setvalueRua(event.target.value)}

                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Bairro:</label>
                        <input
                            type='text'
                            placeholder='Bairro Cliente'
                            name='bairro'
                            value={valueBairro}
                            onChange={(event) => setvalueBairro(event.target.value)}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Cidade:</label>
                        <input
                            type='text'
                            placeholder='cidade Cliente'
                            name='cidade'
                            value={valueCidade}
                            onChange={(event) => setvalueCidade(event.target.value)}
                        />
                    </div>

                    <div className='are-inputs'>
                        <label>Estado:</label>
                        <input
                            type='text'
                            placeholder='estado Cliente'
                            name='estado'
                            maxLength='2'
                            value={valueUf}
                            onChange={(event) => setvalueUf(event.target.value)}

                        />
                    </div>

                    <div className='content-btn-modal'>
                        <button
                            type='submit'
                            className='btn-create-update'
                            onClick={handleSubmit}
                        > Cadastrar</button>
                    </div>

                </form>
            </div >
        </div >
    );
}


export default ModalAddClient;
