import * as C from "./styles";
export const Footer = () => {
  return (
    <C.Footer>
      <p>Desenvolvido por Willian Souza</p>
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </C.Footer>
  );
};
