import { Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home'
import { Pets } from './pages/Pets';
import { PetDetails } from './pages/PetDetails';


export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/pet/:id' element={<PetDetails />} />
        </Routes>
)
}