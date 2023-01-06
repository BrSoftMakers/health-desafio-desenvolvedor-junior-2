
import GlobalStyle from './styles/global';
import { Router } from './routes/Routes';
import { UserContextProvider } from './contexts/user.context';
import { PetsContextProvider } from './contexts/pets.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  return (
    <>
      <UserContextProvider>
        <PetsContextProvider>
          <ToastContainer position="bottom-left" />
          <Router />
          <GlobalStyle />
        </PetsContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
