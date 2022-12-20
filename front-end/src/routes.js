import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Clientes from './pages/Clientes';
import Pets from './pages/Pets';
import NotFound from './pages/NotFound';
import { getItem } from './utils/storage';

function ProtectedRoutes({ redirectTo }) {
    const token = getItem('token');

    return token ? <Outlet /> : <Navigate to={redirectTo} />

}


function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main' element={<Main />} />
            </Route>

            <Route path='/clientes' element={<Clientes />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default MainRoutes;
