import { useForm } from 'react-hook-form';
import validator from 'validator';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { toast } from 'react-toastify';
import logo from '../../assets/Icon/image/animal-dog.gif';
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from './styled';
import { ErrorMessage } from '../../components/ErrorMessage';
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db, googleProvider } from '../../config/firebase.config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { UserContext } from '../../contexts/user.context';
import { Icon } from '../../assets/Icon';

interface ILoginForm {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();

  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);

  const handleSignUp = () => {
    navigate('/signUp');
  };

  function saveDataUser(nameUser: string | any) {
    localStorage.setItem('nameUser', nameUser);
  }

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const nameUser = userCredentials.user.email;
      saveDataUser(nameUser);
    } catch (error) {
      toast.error('algo deu errado, tente novamente!');
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithGooglePress = async () => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithPopup(auth, googleProvider);

      const nameUser = userCredentials.user.displayName;
      saveDataUser(nameUser);

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0];
        const lastName = userCredentials.user.displayName?.split(' ')[1];

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>
          <img src={logo} alt="" />
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton onClick={handleSignInWithGooglePress}>
            <Icon name="google" size={18} /> Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
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

            {errors?.email?.type === 'notFound' && (
              <ErrorMessage>O e-mail não foi encontrado.</ErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor, insira um e-mail válido.</ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <ErrorMessage>A senha é inválida.</ErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            <Icon name="login" size={16} />
            Entrar
          </CustomButton>
          <CustomButton onClick={handleSignUp}>
            <Icon name="user" size={17} />
            Criar conta
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}
