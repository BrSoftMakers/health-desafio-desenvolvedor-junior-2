import React from 'react';
import { createBrowserRouter, useRouteError } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/home', element: <Home /> },
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
