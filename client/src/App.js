import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewPet from './pages/NewPet';
import Home from './pages/Home';
import Pets from './pages/Pets';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Pet from './pages/Pet';

function App({btnText}) {

  return (
    <Router>
          <NavBar/>
          <Routes>
            <Route path='/novo' element={<NewPet />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/pets' element={<Pets />}/>
            <Route path='/pets/:id' element={<Pet/>}/>
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
