import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { PetEdit } from '../../components/PetEdit';

export function EditPetPage() {
  const { id } = useParams();

  if (!id) return null;

  return (
    <>
      <Header />
      <PetEdit petId={id} />
    </>
  );
}
