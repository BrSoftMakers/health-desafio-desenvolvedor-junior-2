import { CustomInput } from '../CustomInput';
import { CustomButton } from '../CustomButton';

import {
  EnvyImgEdit,
  EditBack,
  EditContainer,
  EditContent,
  EditHeadline,
  EditInputContainer,
} from './styled';

import { Icon } from '../../assets/Icon';
import { useContext, useState } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';
import { CustomSelect } from '../CustomSelect';
import { storage } from '../../config/firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { CustomBreed } from '../CustomBreed';
import { toast } from 'react-toastify';

interface IPetsFormProps {
  data: Pets;
}

export const PetEditForm = ({ data }: IPetsFormProps) => {
  const navigate = useNavigate();
  const { updatePet } = useContext(PetsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [nameOwner, setNameOwner] = useState(data.nameOwner);
  const [type, setType] = useState(data.type);
  const [breed, setBreed] = useState(data.breed);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [telephoneOwner, setTelephoneOwner] = useState(data.telephoneOwner);
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const handleHome = () => {
    navigate('/home');
  };

  const handlVerifiqued = () => {
    if (name === '') {
      toast.error('Digite o nome do pet, por favor');
    }
    if (age === '') {
      toast.error('Digite digite a idade, por favor');
    }
    if (type === '') {
      toast.error('Selecione gato ou cachorro, por favor');
    }
    if (breed === '') {
      toast.error('Selecione a raça, por favor');
    }
    if (nameOwner === '') {
      toast.error('Digite o nome do dono, por favor');
    }
    if (telephoneOwner === '') {
      toast.error('Digite um telefone, por favor');
    } else {
      handleUpdate();
    }
  };

  console.log(imageUrl);

  const handleUpdate = () => {
    try {
      toast.success('dados atualizados, com sucesso');
      updatePet(
        data.id,
        name,
        age,
        type,
        breed,
        imageUrl,
        nameOwner,
        telephoneOwner
      );
      setIsLoading(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch {
      toast.error('hmm, parece que algo deu errado, tente novamente!');
    }
  };

  const handleImg = (event: any) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    console.log(file);
    if (!file) return;

    const storageRef = ref(
      storage,
      `images/${file.lastModified}${file.name}${file.lastModifiedDate}${file.size}`
    );
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
          setImageUrl(downloadURL);
        });
      }
    );
  };

  return (
    <>
      {isLoading && <Loading />}
      <EditContainer>
        <EditContent>
          <EditHeadline>
            Atualizar dados do Pet: {data.name}
            <EditBack onClick={handleHome}>
              <Icon name="back" size={12} />
              Voltar
            </EditBack>
          </EditHeadline>

          <EditInputContainer>
            <p>Nome</p>
            <CustomInput
              value={name}
              placeholder="Digite o nome do seu pet"
              onChange={(event) => setName(event.target.value)}
            />
          </EditInputContainer>

          <EditInputContainer>
            <p>Idade</p>
            <CustomInput
              value={age}
              type="number"
              placeholder="Digite a idade do seu pet"
              onChange={(event) => setAge(event.target.value)}
            />
          </EditInputContainer>

          <EditInputContainer>
            <p>Seu Pet é um: </p>
            <CustomSelect setValue={setType} value={type} />
          </EditInputContainer>

          <EditInputContainer>
            <p>Raça</p>
            <CustomBreed
              setValue={setBreed}
              value={breed}
              type={String(type)}
            />
          </EditInputContainer>

          <EditInputContainer>
            <p>Atualizar imagem do pet</p>
            <EnvyImgEdit onSubmit={handleImg}>
              <CustomInput accept=".jpeg,.png, .jpg" type="file" />
              <div>
                <button>Enviar</button>
                <p>{progressPorcent}%</p>
              </div>
            </EnvyImgEdit>
          </EditInputContainer>

          <EditInputContainer>
            <p>Nome do Dono</p>
            <CustomInput
              value={nameOwner}
              placeholder="Digite o nome do dono"
              onChange={(event) => setNameOwner(event.target.value)}
            />
          </EditInputContainer>

          <EditInputContainer>
            <p>Telefone para contato</p>
            <CustomInput
              type="number"
              value={telephoneOwner}
              placeholder="(81) 99143-2425"
              onChange={(event) => setTelephoneOwner(event.target.value)}
            />
          </EditInputContainer>

          <CustomButton onClick={handlVerifiqued}>
            <Icon name="check" size={16} />
            Atualizar
          </CustomButton>
        </EditContent>
      </EditContainer>
    </>
  );
};
