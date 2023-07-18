import { stringify } from "querystring";
import { petType } from "../../../types/petTypes";
import { Button } from "../button";
import * as C from "./styles";
interface Props {
  pet: petType;
  deleteClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  editClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const PetContainer: React.FC<Props> = ({
  pet,
  deleteClickHandler,
  editClickHandler,
}) => {
  return (
    <C.Container>
      <div className="container">
        <div>
          <h1>{pet.nome}</h1>
          <p>Idade: {pet.idade}</p>
          <p>Tipo: {pet.tipo}</p>
          <p>Raça: {pet.raca}</p>
          <p>Dono: {pet.dono_nome}</p>
          <p>Telefone do Dono: {pet.dono_telefone}</p>
        </div>
        {pet.tipo === "gato" ? (
          <img
            className="petImage"
            src="https://img.freepik.com/vetores-gratis/gato-bonito-jogando-bola-de-fios-dos-desenhos-animados-ilustracao-em-vetor-icone-conceito-de-icone-de-natureza-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4169.jpg"
            alt="gato"
          />
        ) : (
          <img
            className="petImage"
            src="https://img.freepik.com/free-vector/cute-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4474.jpg"
            alt="gato"
          />
        )}
      </div>
      <div className="buttons">
        <Button
          id={pet.id?.toString()}
          onClick={editClickHandler}
          name="EDIT"
        />
        <Button
          id={pet.id?.toString()}
          onClick={deleteClickHandler}
          name="DELETE"
        />
      </div>
    </C.Container>
  );
};
