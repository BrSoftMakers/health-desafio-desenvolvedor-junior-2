import { SelectHTMLAttributes } from 'react';
import { CustomSelectContainer } from './styled';

interface ICustomBreedProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  setValue: (value: string) => void;
  type: string;
}

export function CustomBreed({ value, setValue, type }: ICustomBreedProps) {
  return (
    <>
      {type === 'gato' ? (
        <CustomSelectContainer
          value={value}
          onChange={({ target }) => setValue(target.value)}
        >
          <option value="">Selecionar</option>
          <option value="Persa">Persa</option>
          <option value="Siamês">Siamês</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Angorá">Angorá</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Ragdoll">Ragdoll</option>
          <option value="Ashera">Ashera</option>
          <option value="American Shorthair">American Shorthair</option>
          <option value="Exótico">Exóticor</option>
          <option value="Exótico">SRD</option>
          <option value="Desconhecido">Desconhecido</option>
        </CustomSelectContainer>
      ) : (
        <CustomSelectContainer
          value={value}
          onChange={({ target }) => setValue(target.value)}
        >
          <option value="">Selecionar</option>
          <option value="Bulldog Francês">Bulldog Francês</option>
          <option value="Rottweiler">Rottweiler</option>
          <option value="Pug">Pug</option>
          <option value="Angorá">Angorá</option>
          <option value="Golden Retriever">Golden Retriever</option>
          <option value="Pastor Alemão">Pastor Alemão</option>
          <option value="Vira-lata">Vira-lata</option>
          <option value="Labrador">Labrador</option>
          <option value="Pinscher">Pinscher</option>
          <option value="Pitbull">Pitbull</option>
          <option value="Desconhecido">Desconhecido</option>
        </CustomSelectContainer>
      )}
    </>
  );
}
