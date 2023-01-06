import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/Icon';
import { PetsContext } from '../../contexts/pets.context';
import Pets from '../../models/pets.types';
import { DeletePet, OwnerInfo, EditPet,  PetContainer, PetImage, PetInfo } from './styled';


interface IPetsCardProps {
  data: Pets
}

export function PetInfoCard({ data } : IPetsCardProps) {

  const { deletePet } = useContext(PetsContext);

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/edit/${data.id}`);
  };


  return (
    <>
      <PetContainer>
        <PetImage imageUrl={data.imageUrl}>
          <DeletePet onClick={() => deletePet(data.id)}>
            <Icon name='remove' size={18}/>
          </DeletePet>
          <EditPet onClick={handleExploreClick}>
            <Icon name='edit' size={18}/>
          </EditPet>
        </PetImage>

        <PetInfo>
          <strong>Informações do Pet:</strong>
          <p>Nome: {data.name}</p>
          <p>Idade: {data.age} {data.age > '1' ? 'anos' : 'ano'}</p>
          <p>Raça: {data.breed}</p>
          <p>Animal: {data.type}</p>
        </PetInfo>
        <OwnerInfo>
          <strong>Informações do Dono:</strong>
          <p>Nome: {data.nameOwner}</p>
          <p>Fone: {data.telephoneOwner}</p>
        </OwnerInfo>
      </PetContainer>
    </>

  );
}
