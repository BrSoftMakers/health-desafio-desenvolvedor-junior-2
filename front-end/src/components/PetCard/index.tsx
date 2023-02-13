import { usePetContext } from "../../contexts/PetContext";
import { iPet } from "./interfaces";
import { PetCardStyled } from "./style";

export const PetCard = (pet: iPet) => {
  const imageCat =
    "https://rlv.zcache.com.br/adesivo_quadrado_gato_na_silhueta_que_senta_se_na_janela-r87bed76a8ceb4b6fb1cf78705e496045_0ugmc_8byvr_736.webp";
  const imageDog =
    "https://w7.pngwing.com/pngs/976/699/png-transparent-dog-silhouette-shadow-black-and-white-animal.png";

  const { setPetId, setDeleteModal, setEditModal } = usePetContext();

  return (
    <PetCardStyled className="petCard">
      <div className="buttons">
        <button
          onClick={() => {
            setPetId(pet.id);
            setEditModal(true);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            setPetId(pet.id);
            setDeleteModal(true);
          }}
        >
          Excluir
        </button>
      </div>
      <p id="name">{pet.name}</p>
      <img
        src={
          pet.image ? pet.image : pet.species === "Gato" ? imageCat : imageDog
        }
        alt="imagem do pet"
      />
      <p>Idade: {pet.age} anos.</p>
      <p>
        Descrição: {pet.name} é um {pet.species} da raça {pet.breed}.
      </p>
      <div>
        <p>Informações do tutor:</p>
        <p>Nome: {pet.tutorName}</p>
        <p>Contato: {pet.phoneNumber}</p>
      </div>
    </PetCardStyled>
  );
};
