import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { RegisterStyled } from "./style";

export const Register = () => {
  return (
    <RegisterStyled>
      <Header />

      <main>
        <Form />
      </main>
    </RegisterStyled>
  );
};
