import { usePetContext } from "../../contexts/PetContext";
import { ModalDeleteStyled } from "./style";

export const ModalDelete = () => {
  const { deletePet, setDeleteModal } = usePetContext();

  return (
    <ModalDeleteStyled>
      <div className="card_delete">
        <h3>Confirma a deleção Pet?</h3>
        <div className="buttons">
          <button onClick={() => deletePet()}>SIM</button>
          <button onClick={() => setDeleteModal(false)}>NÃO</button>
        </div>
      </div>
    </ModalDeleteStyled>
  );
};
