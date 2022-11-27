import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePet from './pages/CreatePet';
import EditPet from './pages/EditPet';

import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/create" element={<CreatePet />} />
          <Route path="/edit-pet/:petId" element={<EditPet />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
