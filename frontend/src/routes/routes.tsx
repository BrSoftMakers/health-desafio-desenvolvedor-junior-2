//creater router using react-router-dom v6
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import RegisterPet from '../pages/RegisterPet';
import { ListPets } from '../pages/ListPets/indext';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register-pet" element={<RegisterPet />} />
      <Route path="/list-pets" element={<ListPets />} />
    </Routes>
  );
}
