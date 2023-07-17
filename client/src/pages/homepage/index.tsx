import { Dashboard } from "../../components/dashboard";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import * as C from "./styles";
export const HomePage = () => {
  return (
    <C.Container>
      <Header />
      <Dashboard />
      <Footer />
    </C.Container>
  );
};
