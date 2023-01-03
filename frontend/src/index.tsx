import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import Usuarios from './pages/Usuarios';
import EditarUsuario from './pages/EditarUsuario';
import CadastrarPet from './pages/CadastrarPet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/pets",
    element: <></>
  },
  {
    path: "/cadastrarPet",
    element: <CadastrarPet/>
  },
  {
    path: "/editarUsuario",
    element: <EditarUsuario/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
