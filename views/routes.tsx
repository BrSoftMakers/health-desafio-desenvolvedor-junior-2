import { createBrowserRouter } from 'react-router-dom';

import EditOrCreate from './Screens/EditOrCreate';
import HomeScreen from './Screens/Home/HomeScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/create',
    element: <EditOrCreate />,
  },
  {
    path: '/edit/:id',
    element: <EditOrCreate />,
  },
]);

export default router;
