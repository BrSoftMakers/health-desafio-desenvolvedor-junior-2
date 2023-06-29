import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PetProvider } from "./contexts/PetContext";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <PetProvider>
        <Routes />
      </PetProvider>
    </>
  );
}

export default App;
