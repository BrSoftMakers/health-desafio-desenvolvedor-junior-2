import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import CadastrarPet from './pages/cadastrarPet';

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
    element: <></>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
