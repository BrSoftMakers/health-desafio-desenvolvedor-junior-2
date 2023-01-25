/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../routes/utils/auth.routes';

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const redirect = () => {
    navigate('/home');
  };

  const toastMessage = (message, type) => {
    toast?.[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
      autoClose: 3000,
      pauseOnHover: false,
      theme: 'colored',
    });
  };

  const onSubmit = async (data) => {
    try {
      const request = await login(data);
      if (request.status === 200) {
        toastMessage(`${request.data.message}`, 'success');
        localStorage.setItem('user', JSON.stringify({
          nome: request.data.nome,
          email: request.data.email,
          categoria: request.data.categoria,
        }));
        setTimeout(() => {
          redirect();
        }, 5000);
      }
    } catch (error) {
      toastMessage('Ops! Algo de errado não está certo!', 'error');
    }
  };
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <input
        type="email"
        {...register('email', {
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && errors.email.message}

      <input
        {...register('senha', { required: true })}
      />
      {errors.username && errors.username.message}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
