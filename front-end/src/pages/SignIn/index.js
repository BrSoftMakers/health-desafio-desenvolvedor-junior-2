import './styles.css';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseEye from '../../assets/img/closeeye.png';
import OpenEye from '../../assets/img/vieweye.png';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => { //Blaquaer de voltar para pagina main

        const token = getItem('token');

        if (token) {
            navigate('/main');
        }

    }, [navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            if (!email || !senha) {
                return toast.warn('Todos os campos são obrigatórios!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
            }

            const response = await api.post('/login', {
                email: email,
                senha: senha
            });

            const { token, usuario } = response.data;

            setItem('token', token);
            setItem('userName', usuario.nome);
            navigate('/main');

        } catch (error) {
            return toast.error("E-mail ou senha incorretos", {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });

        }

    }


    return (
        <section className='container-sign-in'>

            <div className='content-sign-in'>
                <h1>Pet<span>Shop</span></h1>

                <div className='left'>
                    <h2>Gerencie sua loja aqui na <span>System Pet</span></h2>
                    <h3>
                        Organizar seu PetShop nunca foi tão fácil, com o SYSTEM PET,
                        você tem tudo num único lugar, cadastre-se e confira.
                    </h3>

                    <button type='submit' className='button-sign-in-up' onClick={() => navigate('/sign-up')}>Cadastre-se</button>
                </div>


                <div className='right'>
                    <div className='content-right'>
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit}>

                            <div className='area-inputs'>
                                <label htmlFor='email'>E-mail:</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Seu e-mail'

                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className='area-inputs'>
                                <label htmlFor='senha'>Senha:</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='senha'
                                    placeholder='Sua senha'

                                    value={senha}
                                    onChange={(event) => setSenha(event.target.value)}
                                />
                                <img src={showPassword ? OpenEye : CloseEye} alt='Eye Close and Open'
                                    onClick={() => setShowPassword(!showPassword ? true : false)}
                                />
                            </div>

                            <button
                                type='submit'
                                className='button-sign-in-up'
                            >Entrar</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SignIn;
