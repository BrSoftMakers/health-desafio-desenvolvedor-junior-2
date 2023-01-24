import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';

function Routes() {
  return (
    <Routes>
      <Route render={Login} path="/" exact />
    </Routes>
  );
}

export default Routes;
