import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewPet from './pages/NewPet';

function App({btnText}) {

  return (
    <Router>

          <Routes>
            <Route path='/novopet' element={<NewPet />}/>
          </Routes>
      </Router>
  );
}

export default App;
