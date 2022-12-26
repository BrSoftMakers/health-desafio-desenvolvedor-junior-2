import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import CadastrarUsuario from './pages/CadastrarUsuario';
import Usuarios from './pages/Usuarios';
import EditarUsuario from './pages/EditarUsuario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/usuarios",
        element: <Usuarios/>
      },
      {
        path: "/cadastrarUsuario",
        element: <CadastrarUsuario/>
      },
      {
        path: "/editarUsuario",
        element: <EditarUsuario/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
