import { RouterProvider } from 'react-router-dom';
import Header from './Header';
import router from './routes';
const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
