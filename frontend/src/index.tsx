import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import CadastrarUsuario from './pages/CadastrarUsuario';
import Usuarios from './pages/Usuarios';

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
