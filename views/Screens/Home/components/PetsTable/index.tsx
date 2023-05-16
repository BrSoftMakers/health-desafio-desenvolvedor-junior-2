import { PetModel } from 'models/Pet';
import './styles.css';

type PetsTableInterface = {
  pets: PetModel[];
};

const PetsTable: React.FC<PetsTableInterface> = ({ pets }) => {
  return <div className='pets-table-container'></div>;
};

export default PetsTable;
