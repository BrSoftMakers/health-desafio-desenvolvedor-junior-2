import { Link } from "react-router-dom";
import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <p>PetShop</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Register">Cadastrar</Link>
        <Link to="/Pets">Pets</Link>
      </nav>
    </HeaderStyled>
  );
};
