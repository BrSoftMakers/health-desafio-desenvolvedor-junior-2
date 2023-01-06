import { useForm } from 'react-hook-form';
import validator from 'validator';
import {
  AuthError,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';

import { ErrorMessage } from '../../components/ErrorMessage';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

import {
  SignUpBack,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from './styled';
import { auth, db } from '../../config/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { UserContext } from '../../contexts/user.context';
import logo from '../../assets/Icon/image/animal-dog.gif';
import { Icon } from '../../assets/Icon';

interface SignUpForm {
  fristName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>();

  const [isLoading, setIsLoading] = useState(false);

  const watchPassword = watch('password');
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    navigate('/');
  };

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.fristName,
        lastName: data.lastName,
      });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <img src={logo} alt="" />
          <SignUpHeadline>
            Crie sua conta
            <SignUpBack onClick={handleLogin}>
              {' '}
              <Icon name="back" size={12} />
              Voltar{' '}
            </SignUpBack>
          </SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.fristName}
              placeholder="Digite seu nome"
              {...register('fristName', { required: true })}
            />

            {errors?.fristName?.type === 'required' && (
              <ErrorMessage>O nome é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register('lastName', { required: true })}
            />

            {errors?.lastName?.type === 'required' && (
              <ErrorMessage>O sobrenome é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />

            {errors?.email?.type === 'required' && (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors?.email?.type === 'alreadyInUse' && (
              <ErrorMessage>Este e-mail já está sendo utilizado.</ErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor, insira um e-mail válido.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true, minLength: 8 })}
            />

            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors?.password?.type === 'minLength' && (
              <ErrorMessage>
                A senha precisa ter no mínimo 8 caracteres.
              </ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('passwordConfirmation', {
                required: true,
                minLength: 8,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <ErrorMessage>A confirmação de senha é obrigatória.</ErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <ErrorMessage>
                A confirmação de senha precisa ser igual a senha.
              </ErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'minLength' && (
              <ErrorMessage>
                A senha precisa ter no mínimo 8 caracteres.
              </ErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            <Icon name="check" size={16} /> Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};
