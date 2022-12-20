import './styles.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import CloseEye from '../../assets/img/closeeye.png';
import OpenEye from '../../assets/img/vieweye.png';
import { toast } from 'react-toastify';
import api from '../../services/api';


const dataForm = {
    nome: '',
    email: '',
    senha: '',
    confirmSenha: ''
}

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({ ...dataForm });



    async function hadleSubmit(event) {
        event.preventDefault();

        try {
            if (!form.nome || !form.email || !form.senha || !form.confirmSenha) {
                return toast.warn('Todos os campos são obrigatórios!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            if (form.senha !== form.confirmSenha) {
                return toast.error('As senhas não conferem!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            if (form.senha.length < 8 || form.confirmSenha.length < 8) {
                return toast.error('As senhas devem ser maior ou igual a 8 caracteres!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            const response = await api.post('/usuarios', {
                nome: form.nome,
                email: form.email,
                senha: form.senha,

            });

            navigate('/');

        } catch (error) {
            if (form.email === form.email) {
                return toast.error('E-mail já existe na base de dados', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

        }

    }


    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value });

    }


    return (
        <section className='container-sign-up'>
            <h1>Pet<span>Shop</span></h1>

            <div className='content-sign-up'>

                <div className='content'>
                    <h3>Cadastre-se</h3>
                    <form onSubmit={(event) => hadleSubmit(event)}>
                        <div className='area-inputs'>
                            <label htmlFor='nome'>Nome:</label>
                            <input
                                type='text'
                                name='nome'
                                placeholder='Seu nome'
                                value={form.nome}
                                onChange={handleChangeForm}

                            />
                        </div>

                        <div className='area-inputs'>
                            <label htmlFor='email'>E-mail:</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Seu e-mail'
                                value={form.email}
                                onChange={handleChangeForm}

                            />
                        </div>

                        <div className='area-inputs inputs'>
                            <label htmlFor='senha'>Senha:</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='senha'
                                placeholder='Sua senha'
                                value={form.senha}
                                onChange={handleChangeForm}
                            />

                            <img src={showPassword ? OpenEye : CloseEye} alt='Eye Close and Open'
                                onClick={() => setShowPassword(!showPassword ? true : false)}
                            />

                        </div>

                        <div className='area-inputs inputs'>
                            <label htmlFor='confirmsenha'>Redigite a senha:</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='confirmSenha'
                                placeholder='Confirme sua senha'
                                value={form.confirmSenha}
                                onChange={handleChangeForm}

                            />
                            <img src={showPassword ? OpenEye : CloseEye} alt='Eye Close and Open'
                                onClick={() => setShowPassword(!showPassword ? true : false)}
                            />

                        </div>

                        <button type='submit' className='button-sign-in-up btn-register'>Cadastrar</button>
                        <Link to="/">Já tem cadastro? Clique aqui!</Link>
                    </form>
                </div>
            </div>


        </section>
    );
}

export default SignUp;
