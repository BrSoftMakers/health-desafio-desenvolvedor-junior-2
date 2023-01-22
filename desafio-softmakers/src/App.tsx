import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyle';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Dashboard />
    </>
  );
}

export default App;
