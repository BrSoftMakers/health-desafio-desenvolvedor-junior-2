import { useForm } from 'react-hook-form';

import { ErrorMessage } from '../../components/ErrorMessage';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

import {
  EnvyImg,
  SignUpBack,
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from './styled';
import { db, storage } from '../../config/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Icon } from '../../assets/Icon';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { CustomSelect } from '../../components/CustomSelect';
import { CustomBreed } from '../../components/CustomBreed';
import { Header } from '../../components/Header';

interface IRegisterForm {
  name: string;
  age: string;
  nameOwner: string;
  telephoneOwner: string;
}

export const RegisterPet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const [isLoading, setIsLoading] = useState(false);
  const [imgURL, setImgURL] = useState('');
  const [progressPorcent, setPorgessPorcent] = useState(0);
  const [type, setType] = useState('gato');
  const [breed, setBreed] = useState('');

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/home');
  };

  const handleSubmitPress = async (data: IRegisterForm) => {
    try {
      setIsLoading(true);
      toast.success('cadastrado com sucesso!');
      await addDoc(collection(db, 'petshop'), {
        name: data.name,
        age: data.age,
        type: type,
        breed: breed,
        imageUrl: imgURL,
        nameOwner: data.nameOwner,
        telephoneOwner: data.telephoneOwner,
      });
      navigate('/home');
    } catch (error) {
      toast.error('algo deu errado, verifique os dados e tente novamente!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImg = (event: any) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;
    const timeElapsed = Date.now();

    const storageRef = ref(storage, `images/${file.name}${timeElapsed}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  const uploadImg = () => {
    if (imgURL === '') {
      toast.error('realize o envio da imagem');
    } else if (breed === '') {
      toast.error('selecione a raça do pet');
    } else {
      handleSubmit(handleSubmitPress)();
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>
            Cadastre seu Pet
            <SignUpBack onClick={handleHome}>
              <Icon name="back" size={12} />
              Voltar
            </SignUpBack>
          </SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite o nome do seu pet"
              {...register('name', { required: true })}
            />

            {errors?.name?.type === 'required' && (
              <ErrorMessage>O nome do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Idade</p>
            <CustomInput
              hasError={!!errors?.age}
              type="Number"
              placeholder="Digite a idade do seu pet"
              {...register('age', { required: true })}
            />

            {errors?.age?.type === 'required' && (
              <ErrorMessage>A idade do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Seu Pet é um: </p>
            <CustomSelect setValue={setType} value={type} />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Raça</p>
            <CustomBreed
              setValue={setBreed}
              value={breed}
              type={String(type)}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Envie Imagem do seu pet</p>
            <EnvyImg onSubmit={handleImg}>
              <CustomInput accept=".jpeg,.png, .jpg" type="file" />
              <div>
                <button>Enviar</button>
                <p>{progressPorcent}%</p>
              </div>
            </EnvyImg>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Nome do Dono</p>
            <CustomInput
              hasError={!!errors?.nameOwner}
              placeholder="Digite o nome do dono"
              {...register('nameOwner', { required: true })}
            />

            {errors?.nameOwner?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Telefone para contato</p>
            <CustomInput
              hasError={!!errors?.telephoneOwner}
              placeholder="(81) 99143-2425"
              {...register('telephoneOwner', {
                required: true,
              })}
            />

            {errors?.telephoneOwner?.type === 'required' && (
              <ErrorMessage>A Imagem do pet é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton onClick={() => handleSubmit(uploadImg)()}>
            <Icon name="check" size={16} /> Cadastrar pet
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};
