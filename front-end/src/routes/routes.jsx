import React from 'react';
import { createBrowserRouter, useRouteError } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Pets from '../pages/Pets';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/pets', element: <Pets /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorPage e={error} />;
}

export default router;
