import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePet from './pages/CreatePet';

import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () =>{
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index path='/' element={<HomePage />}/>
          <Route path="/pets" element={<PetsPage />}/>
          <Route path="/create" element={<CreatePet />}/>
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
